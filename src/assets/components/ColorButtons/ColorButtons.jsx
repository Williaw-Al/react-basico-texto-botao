import './ColorButtons.css'
import ColorButton from '../ColorButton/ColorButton'

const colorOfButtons = ['red', 'green', 'blue']

const ColorButtons = () => {
    const root = document.querySelector(":root")

    return (
        <div className='Buttons'>
            { colorOfButtons.map((colorOfButton, index) => {
                return (
                    <ColorButton color={colorOfButton} key={index} />
                )
            }) }
        </div>
    )
}

export default ColorButtons