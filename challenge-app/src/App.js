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
    </div>
  );
}

function StylizedButton () {
  return (
    <>
      <button className="stylizedButton">I am a stylized button</button>
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

  // return (
  //   <>
  //     {stylized ? <StylizedButton></StylizedButton> : <BasicButton></BasicButton>}
  //   </>
  // );

  return (
    <>
      {stylized && <StylizedButton></StylizedButton>}
    </>
  );
}

export default App;
