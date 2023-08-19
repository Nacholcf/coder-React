import { useState, useEffect } from "react";
import { getProductos } from "../lib/productos.request";
import { ItemListContainer, Loader } from "../components";

export const Home = () => {
    const [products, setProducts]   = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getProductos()
        .then(
          (res) => {
        setIsLoading(false);
        setProducts(res);
      }
     );
    }, []);


    return  (
    <div> 
      {/* {isLoading && <Loader />} */}
      {/*   {isLoading || <div>Hola</div>} */}
      {/* {!!0 && <Loader />} */}
      {/*  {0 ? <Loader /> : null} */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};