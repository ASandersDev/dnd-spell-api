
const Block = ({spell}) => {
    return (
        <div className="block">
            <div className="block-header">
                {spell.name}
            </div>
            <div className="innerBody"> 
                School: {spell.school.name}
                <br/>
                Range: {spell.range}
                <br/>
                Duration: {spell.duration}
                <br/>
            </div>
        </div>
    )
}

Block.defaultProps = {
    headerTitle: 'Default'
}

export default Block
