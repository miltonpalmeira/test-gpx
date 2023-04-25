import styles from './Select.module.css'

interface ISelect {
  value: string;
  options: { label: string; value: string }[];
  onChange: any;
}

export default function SelectComponent({ value, options, onChange }: ISelect) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex - 1].value);
  };
  return (
    <select value={value} onChange={handleChange} className={styles.select}>
      <option disabled={true} value=''>
        --Selecione uma opção--
      </option>
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.value}
        </option>
      ))}
    </select>
  );
}
