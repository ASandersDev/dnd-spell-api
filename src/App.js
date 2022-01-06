import './App.css';
import { useState } from 'react';
import Block from './Components/Block';
import getSpell from './callDnD';



function App() {

  const [blocks, setBlocks] = useState([]);

  const addSpell = () => {

    getSpell().then(spell => {
      setBlocks([...blocks, <Block key={blocks.length} spell={spell} />]);
    });
    
  }

  const removeSpell = () => {
    setBlocks(blocks.splice(0, blocks.length - 1));
  }

  const clearSpell = () => {
    setBlocks([]);
  }


  return (
    <div className="App">
      
      <div className="buttonWrapper">
        <button onClick={addSpell} className="menuButton">Get Spell</button>
        <button onClick={removeSpell} className="menuButton">Remove Spell</button>
        <button onClick={clearSpell} className="menuButton">Reset</button>
      </div>

      <header className="block-container">  

        {blocks}

      </header>
    </div>
  );
}

export default App;
