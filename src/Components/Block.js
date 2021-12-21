
const Block = ({spell}) => {
    return (
        <div className="block">
            <div className="block-header">
                {spell.name}
            </div>
        </div>
    )
}

Block.defaultProps = {
    headerTitle: 'Default'
}

export default Block
