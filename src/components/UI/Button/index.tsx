import styles from './Button.module.css';

interface IButton {
    value: string;
    onClick: React.MouseEventHandler<HTMLInputElement>;
} 

export default function ButtonComponent({value, onClick}: IButton) {
  return (
    <div className={styles.container}>
      <input
        type='button'
        value={value}
        className={styles.btn}
        onClick={onClick}
      />
    </div>
  );
}
