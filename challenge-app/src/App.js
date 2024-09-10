import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Recipes from './components/Recipes';

let user = {name: "Kowalski"};

function App() {
  const [userClickCount, setUserClickCount] = useState(0);
  
  function incrementUserClickCount () {
    setUserClickCount(userClickCount + 1);
  }

  return (
    <>
      <div className="NavBar">
        Quick Recipe Ideas
      </div>
      <div className="AppBody">
        <Recipes></Recipes>
      </div>
    </>
  );
}




export default App;
