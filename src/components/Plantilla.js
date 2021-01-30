import React from "react";
import Home from './Home';


const Plantilla =()=>{

return (
    <>
    <h1>NCR</h1>
    <h2>Consulta de Saldo</h2>
    <h3>Seleccione la cuenta a consultar</h3>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Opciones Anteriores</a></li>


         <Home/>


          <li class="page-item"><a class="page-link" href="#">Mas opciones</a></li>
        </ul>
      </nav>
    </>
    
)
}
          
export default Plantilla;