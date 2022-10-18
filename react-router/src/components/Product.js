import { Link, useParams } from "react-router-dom";
import {useFetch} from '../hooks/useFetch'

const Product = () => {
    // rota dinâmica
    const {id} = useParams();

    //carregamento dado invidual
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);



    return <> 
        <p>Id do produto: {id}</p>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$ {product.price}</p>
                {/* Nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  
}

export default Product