import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ setTransactions, transactions }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Informe o nome da fruta"),
    quantity: yup
      .number()
      .typeError("Precisa ser um número")
      .required("Informe a quantidade de fruta"),
    price: yup
      .number()
      .required("Informe o preço da fruta")
      .typeError("Precisa ser um número")
      .positive("O preço não pode ser negativo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    setTransactions([...transactions, data]);
    console.log(data);
  };

  return (
    <>
      <h2>Cadastrar frutas</h2>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <input
            type="text"
            placeholder="Quantidade"
            {...register("quantity")}
          />
          <p>{errors.quantity?.message}</p>

          <input type="text" placeholder="Preço" {...register("price")} />
          <p>{errors.price?.message}</p>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
