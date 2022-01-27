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
            }else if(elem === "attack_type"){
                elem = "Attack Type"
            }else if(elem === "area_of_effect"){
                elem = "Area of Effect"
            }else{
                elem = elem[0].toUpperCase() + elem.substring(1)
            }
            
            if(typeof elemValue === 'object' &&
               !Array.isArray(elemValue) &&
               elemValue !== null){
                    fullSpell.push(`${elem}: 
        Name: ${elemValue.name}`)
               }else{
                    fullSpell.push(`${elem}: ${elemValue}`);
               }
        }
        console.log(fullSpell)
    }

    fullSpell = fullSpell.map((elem, index) => 
        <p key = {index}>{elem}</p>
    )


    return (
        <div className = "block_enlarged">
            <div className="block-header-enlarged">
                {spell.name}
                <button className='enlargeExit' onClick={exitPress}> X </button>
            </div>
            <div className="innerBody-enlarged">
                {fullSpell}
            </div>
        </div>
    )
}

export default EnlargedBlock
