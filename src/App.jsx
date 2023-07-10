import './App.css'
/* import "./nombredelarchivo.css" */
import { NavBar, ItemCount, ItemListContainer } from './components';
import {Home} from "./pages/Home";


//Etiquetas de apertura y cierre div div o auto cierre img
//images import reactlogo from '../assets/react.svg'
//className en lugar de class 
//se escapa js con {}
//Estilos son un objeto {} que puede estar en la estructura del componente o directamente en la etiqueta/componente
//Eventos y estilos en camelCase

function App() {
  const handleCart = (qty)=>{
    console.log("La cantidad es", qty)
  }

  return (
    <div>
      <NavBar />
      <div className="container">
      <ItemListContainer greeting={"Hillside"}/> 
      </div>
      {/* <Home /> */}
      <div className="container">
      <ItemCount stock={10} onAdd={handleCart}/>
      </div>
    </div>
  );
}
     
export default App 
