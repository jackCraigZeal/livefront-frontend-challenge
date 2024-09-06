import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

let user = {name: "Kowalski"};

function App() {
  return (
    <div className="App">
      <h1>
        {user.name}
      </h1>
      <MyButton buttonType="count"></MyButton>
      <MyButton buttonType="count"></MyButton>
      <ShoppingList></ShoppingList>
    </div>
  );
}

function StylizedButton ({onClick}) {
  return (
    <>
      <button className="stylizedButton" onClick={onClick}>I am a stylized button</button>
    </>
  );
}

function CountButton () {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => {setCount(count+1)}}>I am a count button</button>
    </>
  );

  
  // How not to do it: Count Button without State

  // COMMENT_CODE_BLOCK_START
    // let count = 0;

    // return (
    //   <>
    //     <p>Count: {count}</p>
    //     <button onClick={() => {count += 1; console.log(count);}}>I am a count button</button>
    //   </>
    // );
  // COMMENT_CODE_BLOCK_END
}

function MyButton({buttonType}) {
  function alertOnClick() {
    alert("button was clicked");
  }

  if (buttonType == "stylized") {
    return (
      <StylizedButton onClick={alertOnClick}></StylizedButton>
    );
  }
  else if (buttonType == "count") {
    return (
      <CountButton></CountButton>
    );
  }

  return (
    <></>
  )

}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default App;
