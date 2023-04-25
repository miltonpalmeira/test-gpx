import Clock from '../../components/clock';
import ItemHandler from '../../components/item_handler';
import ShyBall from '../../components/shy_ball';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.clock}>
          <Clock />
        </div>
        <div className={styles.item_handler}>
          <ItemHandler />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.shy_ball}>
          <ShyBall />
        </div>
      </div>
    </div>
  );
}
