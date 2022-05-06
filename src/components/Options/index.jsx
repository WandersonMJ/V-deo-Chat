import React, { useContext, useState } from 'react';

import { Button, TextField, Grid } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { AssignmentSharp, PhoneDisabledSharp, Phone } from '@material-ui/icons'

import Text from 'components/Text'

import { SocketContext } from 'context/SocketContext'

import * as S from './styles'

function Options({children}) {
  const { 
    me, 
    callAccepted, 
    callEnded, 
    name, 
    setName, 
    leaveCall, 
    callUser 
  } = useContext(SocketContext)

  const [idToCall, setIdToCall] = useState('')

  return (
    <S.Container>
      <S.Paper>
        <S.Form noValidate autoComplete='off'>
          <S.GridWrapper >
            <Grid item xs={12} md={6} className={{ padding: 20 }}>
              <Text type="button" color="black" >Account Info</Text>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className={{ marginTop: 20 }}>
                <Button variant="contained" color="primary" fullWidth startIcon={<AssignmentSharp fontSize='large' />}>
                    Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={{ padding: 20 }}>
              <Text type="button" color="black" >Make a call</Text>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  startIcon={<PhoneDisabledSharp fontSize="large" />}
                  fullWidth
                  onClick={() => leaveCall()}
                  className={{ marginTop: 20 }}
                >
                  Hang Up
                </Button>
              ): (
                <Button
                  variant="contained" 
                  color="primary" 
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={{ marginTop: 20 }}
                >
                  Call
                </Button>
              )}
            </Grid>
          </S.GridWrapper>
        </S.Form>
        {children}
      </S.Paper>
    </S.Container>
  )
}

export default Options;