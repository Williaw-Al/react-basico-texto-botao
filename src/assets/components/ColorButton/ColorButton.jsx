import "./ColorButton.css"

const ColorButton = ({ color }) => {
    return (
        <button
            className={`btn ${color}`}
            onClick={() => {
                alert(`Cor do texto escolhido trocado para "${color}".`)
                root.style.setProperty('--color-text', color)}
            }
        ></button>
    )
}

export default ColorButton