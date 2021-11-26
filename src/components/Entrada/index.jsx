const Entrada = ({ transactions }) => {
  const entradas = transactions.filter((element) => {
    return Number(element.quantity) > 0;
  });

  return (
    <div>
      <h2>Entradas</h2>

      <ul>
        {entradas.map((fruit, index) => {
          return (
            <li key={index} id={index}>
              Nome: {fruit.name} Quantidade: {fruit.quantity} Valor:
              {fruit.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Entrada;
