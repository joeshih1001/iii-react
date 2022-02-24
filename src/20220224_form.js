import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  //radio group
  const [foodValue, setFoodValue] = useState('');
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉麵'];

  //Selected
  const [selected, setSelected] = useState('');

  //核對方塊 group
  const [likeList, setLikeList] = useState([]);
  const fruitList = ['西瓜', '芒果', '芭樂'];

  return (
    <>
      <h1>可控表單</h1>
      <h2>Input</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      <h2>textArea</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />

      <h2>radio Group</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === foodValue}
              onChange={(e) => {
                setFoodValue(e.target.value);
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        );
      })}

      <h2>下拉選單</h2>

      <label htmlFor="cars">選擇車子:</label>
      <select
        name="cars"
        id="cars"
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>

      <h2>CheckBox Group</h2>
      <p>選擇喜愛的水果</p>
      {fruitList.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={likeList.includes(v)}
              onChange={(e) => {
                //先判斷是否有在狀態陣列中
                const inArray = likeList.includes(e.target.value);
                if (inArray) {
                  //if 在陣列中 -> 移除
                  const newLikeList = likeList.filter(
                    (v, i) => v !== e.target.value
                  );
                  setLikeList(newLikeList);
                } else {
                  const newLikeList = [...likeList, e.target.value];
                  setLikeList(newLikeList);
                }
              }}
            />
            <label>{v}</label>
          </div>
        );
      })}
    </>
  );
}

// export default App;
