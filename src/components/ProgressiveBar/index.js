
// MODULES
import React, { useState, useEffect } from 'react';

// ICONS
import Play from '../Icons/Play';

// STYLES
import styles from './ProgressiveBar.module.scss';

function ProgressiveBar({ title, soundFile }) {

  const [toggle, setToggle] = useState(false);
  const [audio] = useState(new Audio('/sounds/rock.mp3'));
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    console.log(audio.currentTime);

    return () => {}
  }, [audio.currentTime]);

  useEffect(() => {
    
    if (toggle) {
      const id = setInterval(() => {

        const divideValue = audio.duration / audio.currentTime;
        const widthValue = 300 / divideValue; // TODO make 300 width dynamic by taking div's width

        setWidth(Math.floor(widthValue));
      }, 300);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    
    return () => {};
  }, [toggle]);


  useEffect(() => {

    if (toggle) {
      audio?.play();

    } else {
      audio?.pause();
    }
    return () => {};
  }, [toggle]);

  return (
    <div className={styles['container']}>

      <div style={{ width: `${width}px` }} className={styles['bar']}/>

      <div style={{ zIndex: 1, cursor: 'pointer'}} onClick={() => setToggle(!toggle)}  >
        <Play />
      </div>

      <div style={{ zIndex: 1 }}>{title}</div>

    </div>
  );
}

export default ProgressiveBar;

