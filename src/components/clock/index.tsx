import { useEffect, useState } from 'react';
import styles from './Clock.module.css';
import { getCurrentTime } from '../../utils/Time';

interface ITime {
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Clock() {
  const [time, setTime] = useState<ITime>();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getCurrentTime();
      setTime(now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.clock}>{time?.hours}</div>
      <div className={styles.dot}>:</div>
      <div className={styles.clock}>{time?.minutes}</div>
      <div className={styles.dot}>:</div>
      <div className={styles.clock}>{time?.seconds}</div>
    </div>
  );
}
