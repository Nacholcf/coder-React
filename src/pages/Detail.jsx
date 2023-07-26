import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getProducto } from "../lib/productos.request";

export const Detail = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        getProducto().then((res) => {
            setProducto(res);
          });
    }, []);

    return (
        <div className="container">
            <div className="detail">
                <div className="detail__img">
                <img src={producto.img} /></div>
                <div className="detail__info">
                <span className="detail__info-title">{producto.title} </span> 
                <p className="detail__info-description">{producto.description}</p>
                <span className="detail__info-price">
                 $
                {(producto.price || 0).toLocaleString("es-CO", {
                 minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                })}
                </span>
                 
                <span className="detail__info-stock">¡Quedan solo {producto.stock}!</span>

                <ItemCount stock={producto.stock} onAdd={() => alert("Comprados")} /></div> 
                </div>
            </div>
        );
};

