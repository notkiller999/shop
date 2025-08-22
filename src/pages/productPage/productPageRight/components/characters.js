const Characters = ({characters}) => {

    const renderCharacters = () => {
        if (characters) {
            return Object.keys(characters).map( (item, i) =>
                <tr key={i} className="character-row">
                    <th className="character-row-title">{item}</th>
                    <td className="character-row-descr product-group-descr">
                        {characters[item]}
                    </td>
                </tr>
            )
        }
       
    }

    return (
        <div className="product-group">
            <div className="character">
                <div className="character-title product-group-title">
                    Характеристики
                </div>
                <div className="product-group-devider"></div>
                <table className="character-table">
                    <tbody>
                        {renderCharacters()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Characters;