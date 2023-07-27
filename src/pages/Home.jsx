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
       <div className="container">
       <h5>{isLoading ? "Cargando ..." : "Productos"}</h5>
       <ItemListContainer products={products} />
       </div>
    </div>
  );
};
