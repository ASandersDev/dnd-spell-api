
const Block = ({spell}) => {
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
                Level: {spell.level}
                <br/>
                {'damage' in spell &&
                <>Damage: {spell.damage.damage_at_slot_level[spell.level]} </> 
                }
            </div>
        </div>
    )
}

Block.defaultProps = {
    headerTitle: 'Default'
}

export default Block
