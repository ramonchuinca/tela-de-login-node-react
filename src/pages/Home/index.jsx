import { useEffect, useState , useRef} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Trash from "../../assets/trash.svg";
import api from '../../services/api'

function Home() {
 const [users, setUsers] = useState([])

  async function getUsers(){
   const usersFromApi = await api.get('/usuarios')
   users = usersFromApi.data
 

   useEffect(()=>{
    getUsers()

   },[])
  }
   
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
