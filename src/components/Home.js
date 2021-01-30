import React, { useContext } from "react";
import { CuentasContext } from "../context/CuentasContext";
import { PaginaContext } from "../context/PaginaContext";
import PaginaInicial from "./PaginaInicial";
import PaginaIntermedia from "./PaginaIntermedia";
import PaginaUnica from "./PaginaUnica";
import PaginaFinal from "./PaginaFinal";

const Home = () => {
  const [pagina, setPagina] = useContext(PaginaContext);
  const [cuentas, setCuentas] = useContext(CuentasContext);
  let cantdCuentas = cuentas.length;

  return (
    <>
      <h1>NCR</h1>
      <h2>Consulta de Saldo</h2>
      <h3>Seleccione la cuenta a consultar</h3>

      {cantdCuentas <= 4 ? (
        <PaginaUnica />
      ) : cantdCuentas > 4 && pagina === 1 ? (
        <PaginaInicial />
      ) : pagina * 4 >= cantdCuentas ? (
        <PaginaFinal />
      ) : (
        pagina > 1 && pagina * 4 < cantdCuentas(<PaginaIntermedia />)
      )}
    </>
  );
};

export default Home;
