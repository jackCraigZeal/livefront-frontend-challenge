import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

let user = {name: "Kowalski"};

function App() {
  const [userClickCount, setUserClickCount] = useState(0);
  
  function incrementUserClickCount () {
    setUserClickCount(userClickCount + 1);
  }

  return (
    <div className="App">
      <h1>
        {user.name}
      </h1>
      <CountButton onClick={incrementUserClickCount} count={userClickCount}></CountButton>
      <CountButton onClick={incrementUserClickCount} count={userClickCount}></CountButton>
      
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

function CountButton ({count, onClick}) {
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={onClick}>I am a count button</button>
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

export default App;
