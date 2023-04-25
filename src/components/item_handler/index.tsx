import { useState } from 'react';
import styles from './ItemHandler.module.css';
import Select from '../UI/Select';
import TextBoxComponent from '../UI/TextBox';
import Button from '../UI/Button';

/* 
  Desafio Manipulador de itens
  Para as mensagens foram utilizados apenas um alert por conta de ser mais rápido para o teste
*/

export default function ItemHandler() {
  // Opção padrão do item SELECT
  const [options, setOptions] = useState([
    { label: 'Keyboard', value: 'Keyboard' },
  ]);

  const [value, setValue] = useState('');
  const [item, setItem] = useState('');

  // Função para adicionar Item - Verificar se o usuário digitou um valor vazio ou apenas espaços e retorna
  // mensagem. Verifica se o item já foi inserido e retorna mensagem caso seja positivo, caso contrário insere
  // o item na lista
  const addItem = () => {
    if (item.trim() === '') {
      alert('Digite um valor para inserir.');
      clear();
      return;
    }
    if (options.find(element => element.label === item)) {
      alert('O item já foi inserido. Digite um valor diferente.');
      clear();
      return;
    }

    setOptions(oldOptions => [...oldOptions,  { label: item, value: item },]);
    alert('O item foi inserido com sucesso!');
    clear();
  }

  // Função para remover Item - Verificar se o usuário digitou um valor vazio ou apenas espaços e retorna
  // mensagem. Verifica se o item existe na lista retorna mensagem caso negativo, caso contrário remove
  // o item na lista
  const removeItem = () => {
    if (item.trim() === '') {
      alert('Digite um valor para remover.');
      return;
    }
    if (!options.find(element => element.label === item)) {
      alert('O item não está na lista. Digite um item que esteja na lista para remover.');
      clear();
      return;
    }

    setOptions(options.filter(op => op.value !== item));
    alert('O item foi removido com sucesso!');
    clear();
  }

  const clear = () => {
    setItem('');
  }

  return (
    <div className={styles.container}>
      <div className={styles['div-select']}>
        <Select value={value} onChange={setValue} options={options} />
      </div>
      <div className={styles['div-text']}>
        <TextBoxComponent item={item} setItem={setItem} />
      </div>
      <div className={styles['div-buttons']}>
        <Button value='Adicionar' onClick={addItem} />
        <Button value='Remover' onClick={removeItem} />
        <Button value='Limpar Caixa' onClick={clear} />
      </div>
      <div className={styles['div-message']}>
        <div className={styles.message}>{value}</div>
      </div>
    </div>
  );
}
