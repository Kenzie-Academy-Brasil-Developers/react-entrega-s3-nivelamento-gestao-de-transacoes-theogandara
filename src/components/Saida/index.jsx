const Saida = ({ transactions }) => {
    const saidas = transactions.filter((element) => {
      return Number(element.quantity) < 0;
    });
  
    return (
      <div>
        <h2>Saidas</h2>
  
        <ul>
          {saidas.map((fruit, index) => {
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
  
  export default Saida;
  