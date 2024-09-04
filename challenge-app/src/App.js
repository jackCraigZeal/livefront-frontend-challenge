import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tutorials</h1>
      <MyButton></MyButton>
    </div>
  );
}

function MyButton() {
  return (
    <>
      <button className="fancyButton">I am a fancy button</button>
      <button>I am an extra button</button>
    </>
  )
}

export default App;
