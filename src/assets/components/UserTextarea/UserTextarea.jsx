import { useState } from 'react'
import './UserTextarea.css'
import AltText from '../AltText/AltText'

const UserTextarea = () => {
    const [userInput, setUserInput] = useState()

    return (
        <div className='UserTextarea'>
            <AltText text={userInput} />
            <textarea
                placeholder='Escreva aqui'
                onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
        </div>
    )
}

export default UserTextarea