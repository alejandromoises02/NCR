import React, { useContext } from "react";
import {CuentasContext} from "../context/CuentasContext";
import { Link } from 'react-router-dom';


const Home =()=>{

    
    const [cuentas, setCuentas] = useContext(CuentasContext);
 
  
return (
  <>
  {cuentas.length === 0 ? (
    <div>Espere un momento...</div>
  ) : (
    <div>
        
        {cuentas.map((element, index) => (

            <>
            
            {element.description !== "desconocida" && element.id<=4 ?
            <>
            <li class="page-item">
                <Link class="page-link" key={index} to={'/cuenta/'+element.number}>{element.description} nro: {element.number}</Link>
            </li>
            </>:null
            }
            
        
            
            </>
      
    )
    )}</div>
  )
  }
</>
)
}
          
export default Home;