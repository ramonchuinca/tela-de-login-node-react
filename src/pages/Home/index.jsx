import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "6548925trh245654789hd",
      name: "sheik-2",
      age: 45,
      email: "sheyno@hotmail.com",
    },
    {
      id: "6548925trh245698",
      name: "sheik",
      age: 40,
      email: "shey@hotmail.com",
    },
    {
      id: "6548925trh245654789hd",
      name: "sheik-2",
      age: 45,
      email: "sheyno@hotmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1 class="texto-h1">Cadastro de Ususários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card-1">
          <div>
            <p>nome: {user.name}</p>
            <p>idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
