import './AltText.css'
import PropTypes from 'prop-types'

const AltText = ({ text }) => {
    return <p className='AltText'>{text}</p>
}

AltText.propTypes = {
    text: PropTypes.string
}

export default AltText