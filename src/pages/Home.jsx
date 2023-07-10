import { useState, useEffect } from "react";

export const Home = () => {
    const [products, setProducts]   = useState([]);

    useEffect(()=> {
        console.log("Montando");
    }, []);

    useEffect(()=> {
        if(products.length) console.log({products})
    }, [products]);

    return  (
    <div> 
       Pagina Principal
       <button onClick={() => setProducts([...products, "Producto uno", "Producto dos"])}>
       Agregar Productos
       </button>
    </div>
  );
};
