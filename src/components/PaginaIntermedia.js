import React, { useContext } from "react";
import { CuentasContext } from "../context/CuentasContext";
import { PaginaContext } from "../context/PaginaContext";
import { Link } from "react-router-dom";

const PaginaIntermedia = () => {
  const [pagina, setPagina] = useContext(PaginaContext);
  const [cuentas, setCuentas] = useContext(CuentasContext);

  const incrementar = () => {
    let nroPagina = pagina;
    nroPagina++;
    setPagina(nroPagina);
  };

  const decrementar = () => {
    let nroPagina = pagina;
    nroPagina--;
    setPagina(nroPagina);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="row pagination">
          <li key={"prev"} className="page-item col-4 cuadriculas">
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
                  element.id > 4 * pagina - 3 &&
                  element.id <= 4 * pagina ? (
                    <>
                      <li key={element.id} className="page-item col-4 cuadriculas">
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
          <li key={"next"} className="page-item col-4 cuadriculas">
            <Link onClick={(e) => incrementar(e)} className="page-link" to={"/"}>
              Mas opciones
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginaIntermedia;
