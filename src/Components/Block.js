
const Block = ({spell}) => {

    if(spell.level > 0 ){
        var spellLevel = spell.level
    }else{
        spellLevel = 'Cantrip'
    }

    if('damage' in spell){
       var damageItems =  Object.getOwnPropertyNames(spell.damage)
       damageItems = damageItems[1]
       var damageStartLevel = Object.getOwnPropertyNames(spell.damage[damageItems])
       damageStartLevel = damageStartLevel[0]
    }

    
    return (
        <div className="block_minified">
            <div className="block-header">
                {spell.name}
            </div>
            <div className="innerBody"> 
                School: {spell.school.name}
                <br/>
                Range: {spell.range}
                <br/>
                Level: {spellLevel}
                <br/>
                {'damage' in spell &&
                <>Damage: {spell.damage[damageItems][damageStartLevel]} </> 
                }
            </div>
        </div>
    )
}

Block.defaultProps = {
    headerTitle: 'Default'
}

export default Block
