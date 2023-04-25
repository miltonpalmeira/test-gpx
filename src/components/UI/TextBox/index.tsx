import styles from './TextBox.module.css';

interface ITextInput {
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextBoxComponent({ item, setItem }: ITextInput) {
  return (
    <input
      type='text'
      value={item}
      onChange={(evento) => setItem(evento.target.value)}
      placeholder='Insira um item'
      className={styles.text}
    />
  );
}
