import { useState } from "react";

const Display = ({fruits}) => {

  const [hide, setHide] = useState(true)

  return (
    <>
      <button className="hide" onClick={()=>setHide(!hide)}>{hide ? "Ocultar transações" : "Mostrar transações"}</button>
      {hide ? (    <ul>
        <h2>Todas as transações</h2>
      {fruits.map((fruit,index) => {
        return (
          <li key={index} id={index}>
            Nome: {fruit.name} Quantidade: {fruit.quantity} Valor:{fruit.price}
          </li>
        );
      })}
    </ul>):("")}

    </>
  );
};
export default Display;
