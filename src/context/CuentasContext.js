import React, { useEffect, useState } from "react";

export const CuentasContext = React.createContext([]);

export const CuentasProvider = ({children}) => {
const [cuentas, setCuentas] = useState([]);
let cap, cad, ccp, ccd;
let data;
let cont = 1;

useEffect(() => {
    async function bajarData(){
        const url = "https://api.npoint.io/e9cb7acc6095dff4004a";
        const resp = await fetch(url)
        data = await resp.json();
        console.log(data);
        data.tipos.forEach(element => {
            if (element.codigo === "CA" && element.moneda === "$")          cap = element.id;
            else if (element.codigo === "CA" && element.moneda === "U$S")   cad = element.id;
            else if (element.codigo === "CC" && element.moneda === "$")     ccp = element.id;
            else if (element.codigo === "CC" && element.moneda === "U$S")   ccd = element.id;
        });


        const ingresarCuenta = (id, cuenta, description, moneda) =>{
            return {
                id : id,
                type: cuenta.type,
                saldo: cuenta.saldo,
                number: cuenta.number,
                description: description,
                moneda: moneda
            }
        }

        let aux = data.cuentas.map(function(dato){
            let newItem = {};
            if (dato.type === cap) {
                newItem = ingresarCuenta(cont, dato, "Caja de Ahorro", "$");
                cont++;
            }
            else if (dato.type === cad) {
                newItem = ingresarCuenta(cont, dato, "Caja de Ahorro", "U$S");
                cont++;
            }    
            else if (dato.type === ccp) {
                newItem = ingresarCuenta(cont, dato, "Cuenta Corriente", "$");
                cont++;
            }    
            else if (dato.type === ccd) {
                newItem = ingresarCuenta(cont, dato, "Cuenta Corriente", "U$S");
                cont++;
            }    
            else {
                newItem = ingresarCuenta(0, dato, "desconocida", "desconocida")  
            }
            return newItem;
          
        })

        setCuentas(aux);
    }

    bajarData();

}, [])


return <CuentasContext.Provider value = {[cuentas, setCuentas] }>
    {children}
</CuentasContext.Provider>
      }  
      