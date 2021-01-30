import React, { useEffect, useState } from "react";

export const CuentasContext = React.createContext([]);

export const CuentasProvider = ({children}) => {
const [cuentas, setCuentas] = useState([]);
let cap, cad, ccp, ccd;
let data;

useEffect(() => {
    async function bajarData(){
        const resp = await fetch("https://api.npoint.io/e9cb7acc6095dff4004a")
        data = await resp.json();
        console.log(data);
        data.tipos.forEach(element => {
            if (element.codigo === "CA" && element.moneda === "$")          cap = element.id;
            else if (element.codigo === "CA" && element.moneda === "U$S")   cad = element.id;
            else if (element.codigo === "CC" && element.moneda === "$")     ccp = element.id;
            else if (element.codigo === "CC" && element.moneda === "U$S")   ccd = element.id;
        });

        let aux = data.cuentas.map(function(dato){
            let newItem = {};
            if (dato.type === cap) {
                newItem = {
                    type: dato.type,
                    saldo: dato.saldo,
                    number: dato.number,
                    description: "Caja de Ahorro",
                    moneda:"$"
                };
            }
            else if (dato.type === cad) {
                newItem = {
                    type: dato.type,
                    saldo: dato.saldo,
                    number: dato.number,
                    description: "Caja de Ahorro",
                    moneda:"U$S"
                };
            }
            else if (dato.type === ccp) {
                newItem = {
                    type: dato.type,
                    saldo: dato.saldo,
                    number: dato.number,
                    description: "Cuenta Corriente",
                    moneda:"$"
                };
            }
            else if (dato.type === ccd) {
                newItem = {
                    type: dato.type,
                    saldo: dato.saldo,
                    number: dato.number,
                    description: "Cuenta Corriente",
                    moneda:"U$S"
                };
            }
            else {
                newItem = {
                    type: dato.type,
                    saldo: dato.saldo,
                    number: dato.number,
                    description: "desconocida",
                    moneda:"desconocida"
                };
            }

            return newItem;
          
        })

        setCuentas(aux);
    }

    bajarData();

}, [])


return <CuentasContext.Provider value = {[cuentas, setCuentas, cap, cad, ccp, ccd] }>
    {children}
</CuentasContext.Provider>
      }  
      