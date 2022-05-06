import React from 'react';

import Text from 'components/Text'

import VideoPlayer from 'components/VideoPlayer'
import Notifications from 'components/Notification'
import Options from 'components/Options'

import * as S from './styles'

const Video = () => {

  return (
    <S.Container>
      <S.AppBar>
          <Text color='white' bold type='title'>Video Chat</Text>
      </S.AppBar>
      <VideoPlayer />
      <Options>
          <Notifications />
      </Options>
    </S.Container>
  )
}

export default Video