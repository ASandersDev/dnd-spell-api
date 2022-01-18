import './App.css';
import { useState } from 'react';
import Block from './Components/Block';
import EnlargedBlock from './Components/EnlargedBlock';
import getSpell from './callDnD';



function App() {

  const [blocks, setBlocks] = useState([]);
  const [enlargedBlock, setEnlargedBlock] = useState(null)

  const addSpell = () => {

    getSpell().then(spell => {
      setBlocks([...blocks, <Block key={blocks.length} spell={spell} onPress={() => {enlargeBlock(spell)}} />]);
    });
    
  }

  const removeSpell = () => {
    setBlocks(blocks.splice(0, blocks.length - 1));
  }

  const resetSpell = () => {
    setBlocks([]);
    setEnlargedBlock(null)

  }

  const enlargeBlock = (spell) => {
    setEnlargedBlock(<EnlargedBlock spell={spell} exitPress={() => {setEnlargedBlock(null)}}/>)
  }


  return (
    <div className="App">
      
      <div className="buttonWrapper">
        <button onClick={addSpell} className="menuButton">Get Spell</button>
        <button onClick={removeSpell} className="menuButton">Remove Spell</button>
        <button onClick={resetSpell} className="menuButton">Reset</button>
      </div>

      <div className="block-container">  

        {blocks}
        {enlargedBlock && 
          <>{enlargedBlock}</>
        }

      </div>
    </div>
  );
}

export default App;
