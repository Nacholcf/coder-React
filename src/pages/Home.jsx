import { useState, useEffect } from "react";
import { getProductos } from "../lib/productos.request";
import { ItemListContainer } from "../components";

export const Home = () => {
    const [products, setProducts]   = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {

        getProductos()
        .then(res => {
        setIsLoading(false);
        setProducts(res)}

        )

    }, []);


    return  (
    <div> 
       Pagina Principal
       <div className="container">
       <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
       <ItemListContainer products={products} />
       </div>
    </div>
  );
};
