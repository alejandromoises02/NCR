import React, { useContext } from "react";
import { CuentasContext } from "../context/CuentasContext";
import { PaginaContext } from "../context/PaginaContext";
import { Link } from "react-router-dom";

const PaginaFinal = () => {
  const [pagina, setPagina] = useContext(PaginaContext);
  const [cuentas, setCuentas] = useContext(CuentasContext);

  const decrementar = () => {
    let nroPagina = pagina;
    nroPagina--;
    setPagina(nroPagina);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="row pagination">
          <li key={"prev"} className="page-item col-4">
            <Link onClick={(e) => decrementar(e)} className="page-link" to={"/"}>
              Opciones Anteriores
            </Link>
          </li>

          {cuentas.length === 0 ? (
            <div>Espere un momento...</div>
          ) : (
            <>
              {cuentas.map((element, index) => (
                <>
                  {element.description !== "desconocida" &&
                  element.id > (pagina - 1) * 4 ? (
                    <>
                      <li key={element.id} className="page-item col-4">
                        <Link
                          className="page-link"
                          key={element.number}
                          to={"/cuenta/" + element.number}
                        >
                          {element.description} nro: {element.number}
                        </Link>
                      </li>
                    </>
                  ) : null}
                </>
              ))}
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default PaginaFinal;
