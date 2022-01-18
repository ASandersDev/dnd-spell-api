import React from 'react'

function EnlargedBlock({spell, exitPress}) {

    let fullSpell = [];

    for(let elem in spell){
        if(elem !== "index" && elem !== "name" && elem !== "url"){
            let elemValue = spell[elem]
            if(elem === "desc"){
                elem = "Description"
            }else if(elem === "higher_level"){
                elem = "Higher Level"
            }else if(elem === "casting time"){
                elem = "Casting Time"
            }else if(elem === "casting_time"){
                elem = "Casting Time"
            }else if(elem === "attack_type"){
                elem = "Attack Type"
            }else{
                elem = elem[0].toUpperCase() + elem.substring(1)
            }
            
            fullSpell.push(`${elem}: ${elemValue}`);
        }
    }

    fullSpell = fullSpell.map((elem, index) => 
        <p key = {index}>{elem}</p>
    )



    return (
        <div className = "block_enlarged">
            <div className="block-header">
                {spell.name}
                <button className='enlargeExit' onClick={exitPress}> X </button>
            </div>
            <div className="innerBody">
                {fullSpell}
            </div>
        </div>
    )
}

export default EnlargedBlock
