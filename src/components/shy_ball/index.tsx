import { useState } from 'react';
import styles from './shy_ball.module.css';

export default function ShyBall() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  
  const moveBall = () => {
    const box = document.querySelector('#container');
    setPositionX(Math.floor(Math.random() * 10) * (box!.clientHeight / 10));
    setPositionY(Math.floor(Math.random() * 10) * (box!.clientHeight / 10) - 50);
  };

  return (
    <div className={styles.container} id='container'>
      <div
        className={styles.ball}
        id='ball'
        style={{
          transform: `translate(${positionX}px, ${positionY}px)`,
        }}
        onMouseOver={moveBall}
      ></div>
    </div>
  );
}
