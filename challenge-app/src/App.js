import logo from './logo.svg';
import './App.css';

let user = {name: "Kowalski"};

let stylized = true;

function App() {
  return (
    <div className="App">
      <h1>
        {user.name}
      </h1>
      <MyButton></MyButton>
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

function BasicButton () {
  return (
    <>
      <button>I am a basic button</button>
    </>
  );
}

function MyButton() {
  function alertOnClick() {
    alert("button was clicked");
  }
  // let button;

  // if (stylized) {
  //   button = <StylizedButton />;
  // } else {
  //   button = <BasicButton />;
  // }

  // return (
  //   <>
  //     {button}
  //   </>
  // );

  // ------

  return (
    <>
      {stylized ? <StylizedButton OnClick={alertOnClick}></StylizedButton> : <BasicButton onClick={alertOnClick}></BasicButton>}
    </>
  );

  // return (
  //   <>
  //     {stylized && <StylizedButton></StylizedButton>}
  //   </>
  // );
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
