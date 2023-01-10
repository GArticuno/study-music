
import { useEffect, useRef, useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './styles.css';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if(!audioRef.current){
      return
    }
    if(isPlaying){
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

  }, [isPlaying]);


  function handleSeek(amount: number | number[]) {
    if (audioRef.current && typeof amount === 'number') {
      audioRef.current.volume = amount / 100;
      setVolume(amount);
    }
  }

  return (
    <div className='container'>
        <div className='image-container'>
          <img src="/assets/splash.svg" alt="splash"  unselectable="on" />
        </div>
        <div className="title-container">
          <div title="title=artist" unselectable="on">
            Rick and Morty
          </div>
          <div className="title-name" unselectable="on">
            lofi beats to relax/study
          </div>
        </div>
        <div>
          <Slider
            max={100}
            value={volume}
            onChange={handleSeek}
            trackStyle={{backgroundColor: '#6E49BF' }}
            railStyle={{backgroundColor: '#B9A3D9'}}
            handleStyle={{borderColor: '#6E49BF', borderWidth: 4}}
          />
        </div>
        <audio 
          src="assets/music.mp3"
          ref={audioRef}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <button
          className='button-player'
          onClick={() => setIsPlaying((prevState) => !prevState)}
        >
          {isPlaying ? (
            <BsFillPauseFill size={30} color="#ffffff" />
          ):(
            <BsFillPlayFill size={30} color="#ffffff" />
          )}
        </button>
    </div>
  )
}