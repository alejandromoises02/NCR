import React, { useEffect, useState } from "react";

export const CuentasContext = React.createContext([]);

export const CuentasProvider = ({children}) => {
const [cuentas, setCuentas] = useState({});
let cap, cad, ccp, ccd;

useEffect(() => {
    async function bajarData(){
        const resp = await fetch("https://api.npoint.io/e9cb7acc6095dff4004a")
        const data = await resp.json();
        console.log(data);
        data.tipos.forEach(element => {
            if (element.codigo === "CA" && element.moneda === "$") {
                cap = element.id;
                console.log(cap);
            }
            else if (element.codigo === "CA" && element.moneda === "U$S"){
                cad = element.id;
                console.log(cad);
            }
            else if (element.codigo === "CC" && element.moneda === "$"){
                ccp = element.id;
                console.log(ccp);
            }
            else if (element.codigo === "CC" && element.moneda === "U$S"){
                ccd = element.id;
                console.log(ccd);
            }
        });
    }
    bajarData();

    


}, [])


return <CuentasContext.Provider value = {[cuentas, setCuentas]}>
    {children}
</CuentasContext.Provider>
      }  
      