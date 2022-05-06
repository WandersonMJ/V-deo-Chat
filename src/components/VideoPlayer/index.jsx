import React, { useContext } from 'react';

import { Grid } from '@material-ui/core'

import Text from 'components/Text'

import { SocketContext } from 'context/SocketContext'

import * as S from './styles'

function VideoPlayer() {
  const { 
    name, 
    callAccepted, 
    myVideo, 
    userVideo, 
    callEnded, 
    stream,
  } = useContext(SocketContext)

  return (
    <S.Container>
      {stream && (
        <S.Paper>
          <Grid item xs={12} md={6}>
            <Text color="blackRaisin" type="button">
              {name || 'Name'}
            </Text>
            <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />
          </Grid>
        </S.Paper>
      )}
      {callAccepted && !callEnded && (
        <S.Paper>
          <Grid item xs={12} md={6}>
            <Text color="blackRaisin" type="button">
              { name || 'Name'}
            </Text>
            <video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />
          </Grid>
        </S.Paper>
      )}
    </S.Container>
  );
}

export default VideoPlayer;