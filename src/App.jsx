import './App.css'
import AltText from './assets/components/AltText/AltText'
import ColorButtons from './assets/components/ColorButtons/ColorButtons'
import UserTextarea from './assets/components/UserTextarea/UserTextarea'

function App() {
  return (
    <>
      <h1>Quest React Básico - Texto Colorido</h1>

      <AltText text='Escreva um texto na caixa abaixo e o torne como este aqui, colorido e todo uppercase!' />
      <UserTextarea />

      <h3>Aperte um dos botões e troque a cor do seu texto acima!</h3>
      <ColorButtons />
    </>
  )
}

export default App
