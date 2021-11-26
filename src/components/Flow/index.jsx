import { useState } from "react";
import Entrada from "../Entrada";
import Saida from "../Saida";

const Flow = ({ transactions }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <>
          <button onClick={() => setShow(!show)}>Mostrar saidas</button>
          <Entrada transactions={transactions} />
        </>
      ) : (
        <>
          <button onClick={() => setShow(!show)}>Mostrar saidas</button>
          <Saida transactions={transactions} />
        </>
      )}
    </>
  );
};

export default Flow;
