import './App.css';
import { useState } from 'react';
import Block from './Components/Block';
import returnSpell from './callDnD';



function App() {

  const [blocks, setBlocks] = useState([]);

  const addSpell = function() {
    const spellCall = returnSpell();
    
    spellCall.then(spell => {
      setBlocks([...blocks, <Block key={blocks.length} spell={spell} />]);
    });
  }

  const removeSpell = function() {
    setBlocks(blocks.splice(0, blocks.length - 1));
  }

  const clearSpell = function() {
    setBlocks([]);
  }


  return (
    <div className="App">
      
      <div className="buttonWrapper">
        <button onClick={addSpell} className="button">Get Spell</button>
        <button onClick={removeSpell} className="button">Remove Spell</button>
        <button onClick={clearSpell} className="button">Reset</button>
      </div>

      <header className="block-container">  

        {blocks}

      </header>
    </div>
  );
}

export default App;
