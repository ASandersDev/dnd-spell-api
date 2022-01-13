import './App.css';
import { useState } from 'react';
import Block from './Components/Block';
import EnlargedBlock from './Components/EnlargedBlock';
import getSpell from './callDnD';



function App() {

  const [blocks, setBlocks] = useState([]);
  const [enlargedBlock, setEnlargedBlock] = useState({})

  const addSpell = () => {

    getSpell().then(spell => {
      setBlocks([...blocks, <Block key={blocks.length} spell={spell} onClick = {enlargeBlock(spell)} />]);
    });
    
  }

  const removeSpell = () => {
    setBlocks(blocks.splice(0, blocks.length - 1));
  }

  const clearSpell = () => {
    setBlocks([]);
  }

  const enlargeBlock = (spell) => {
    setEnlargedBlock(<EnlargedBlock spell={spell}/>)
  }


  return (
    <div className="App">
      
      <div className="buttonWrapper">
        <button onClick={addSpell} className="menuButton">Get Spell</button>
        <button onClick={removeSpell} className="menuButton">Remove Spell</button>
        <button onClick={clearSpell} className="menuButton">Reset</button>
      </div>

      <div className="block-container">  

        {blocks}

      </div>
    </div>
  );
}

export default App;
