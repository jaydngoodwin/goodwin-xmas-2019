import React, { useState } from 'react';
import Sound from 'react-sound'
import {useStore} from './store'

const importAll = (r) => {
    return r.keys().map(r)
}
  
const mp3s = importAll(require.context('./songs', false, /\.(mp3)$/))
  
const BackgroundMusic = () => {
  const { state } = useStore()
  const [ currentSong, setCurrentSong ] = useState(mp3s[0])

  return (
    <Sound
      url={currentSong}
      playStatus={Sound.status.PAUSED}
      // playStatus={state.paused ? Sound.status.PAUSED : Sound.status.PLAYING}
      onFinishedPlaying={() => setCurrentSong(mp3s[(mp3s.indexOf(currentSong)+1) % mp3s.length])}
      volume={state.quiet ? 25 : 75}
    />
  )
}

export default BackgroundMusic