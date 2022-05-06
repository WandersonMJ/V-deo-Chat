import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext();

const socket = io('http://localhost:5000')

const ContextProvider = ({children}) => {
	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")

	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef = useRef()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
            try {	
                myVideo.current.srcObject = stream
            } catch (err) {
                console.log(err);
            }
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

  const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
		window.location.reload()
	}

    return (
        <SocketContext.Provider value={{
          me,
          stream,
          receivingCall,
          caller,
          callerSignal,
          callAccepted,
          idToCall,
          callEnded,
          setName,
          name,
          setIdToCall,
          callUser,
          answerCall,
          leaveCall,

          myVideo,
          userVideo,
          connectionRef
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext } 