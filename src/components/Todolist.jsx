import React, { useState } from 'react';

export function Listado() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);

  const agregarItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
      setCount(count + 1);
    }
  };

  const eliminarItem = (index) => {
    const nuevosItems = [...items];
    nuevosItems.splice(index, 1);
    setItems(nuevosItems);
    setCount(count - 1);
  };

  return (
    <div className='container'>
      <div><h1>TODOS</h1></div>
      <div className="list-group">
        <ul>
          <li class="list-group-item">

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  agregarItem();
                }
              }}
            />
          </li>
          {items.map((item, index) => (

            <li class="list-group-item" key={index}>
              {item}
              <button class="delete-button" onClick={() => eliminarItem(index)}>X</button>
            </li>
          ))}
          <li class="list-group-item">
            <p> {count} item left</p>
          </li>
        </ul>
        <div className='one'></div>

        <div className='two'></div>

        <div className='three'></div>
      </div>
    </div>
  );
};

export default Listado;