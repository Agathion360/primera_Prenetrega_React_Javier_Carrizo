
import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
 

  return (
    <>
     <Navbar />
     <ItemListContainer greeting={"Hola Mundo!"}/>
    </>
  )
}

export default App
