import './App.css';
import {useState} from 'react';
import Recipes from './components/Recipes/Recipes';

let user = {name: "Kowalski"};

const App: React.FC = () => {
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
