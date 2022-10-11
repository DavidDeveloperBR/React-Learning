import './App.css';

import {useState, useEffect} from "react";
import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products";

function App() {
const [products, setProducts] = useState([]);
const [name, setName] = useState("");
const [price, setPrice] = useState("");

//custom hook
const {data: items, httpConfig, loading, error} = useFetch(url);

//Resgatando dados
/* useEffect(() =>{
  async function fetchData(){
    const res = await fetch(url);

    const data = await res.json();
  
    setProducts(data);
  }

  fetchData();
}, []);
 */


//Adição produtos
const handleSubmit = async (e) =>{
  e.preventDefault();
  const product = {
    name, 
    price
  };

/*   const res = await fetch(url, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product),
  });

  // carregamento dinâmico
  const adedproduct = await res.json();
  setProducts((prevProducts) =>[...prevProducts, adedproduct]); */

  //refatorando post
  httpConfig(product, "POST");

  setName("");
  setPrice("");
}

// desafio 6: delete

const handleRemove = (id) =>{
  httpConfig(id, "DELETE");
}

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && 
      <ul>
            {items && items.map((item)=>(
              <li key={item.id}>{item.name} - R$: {item.price}
                <button onClick={() => handleRemove(item.id)}>Excluir</button>
              </li>
            ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>   
            </label>
            <label>
              Preço:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>   
            </label>
            {/* loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
        </form>    
      </div>
    </div>
  );
}

export default App;
