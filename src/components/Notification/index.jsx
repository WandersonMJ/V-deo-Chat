import React, { useContext } from 'react';

import { Button } from '@material-ui/core'

import { SocketContext } from 'context/SocketContext'

function Notifications() {
  const { answerCall, receivingCall, name, callAccepted } = useContext(SocketContext)

  return (
    <>
      {receivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
          <h1>{name}</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
}

export default Notifications;