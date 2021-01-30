import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {CuentasContext} from "../context/CuentasContext";

const CuentaDetailContainer = () => {
const [cuentas, setCuentas] = useContext(CuentasContext);
  const [cuenta, setCuenta] = useState({});
  const [loading, setLoading] = useState(false);

  const { number } = useParams();

  useEffect(() => {

    cuentas.forEach(element => {
        if(element.number === number) setCuenta(element);
    });
    console.log(number);
    },[number]) 

  return (
    <>
      <h2>Tipo de cuenta:{cuenta.description} numero {cuenta.number}</h2>
      <h2>Saldo: {cuenta.saldo} {cuenta.moneda}</h2>
    </>
  );
};

export default CuentaDetailContainer;
