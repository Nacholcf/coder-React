import { useEffect, useState, useCallback } from "react";
import { Item, ItemCount, Loader  } from "../components";
import { getProducto } from "../lib/productos.request";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";


export const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate(); 
    const [producto, setProducto] = useState({});

    const {addProduct, itemInCart } = useCartContext();
   
    useEffect(() => {
        getProducto(id).then((res) => {
            if (!res) return navigate('/'); 
            setProducto(res);
          });
    }, []);

    const handleAdd = useCallback(
    (qty) => { 
        addProduct(producto, qty);
    },
    [addProduct, producto]
    );

    if (!Object.keys(producto).length) return <Loader />;

    return (
        <div className="container">
            <div className="detail">
                <div className="detail__img">
                <img src={producto.img} />
                </div>
                <div className="detail__info">
                <span className="detail__info-title">{producto.title} </span> 

                <p className="detail__info-description">{producto.description}</p>

                <span className="detail__info-price">
                 $
                {(producto.price || 0).toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                })}
                </span>
                 
                <span className="detail__info-stock">¡Ultimas piezas! Quedan {producto.stock}</span>

                <ItemCount 
                stock={producto.stock - (itemInCart?.(id)?.qty || 0)} 
                onAdd={handleAdd} 
                />
                </div> 
            </div>
        </div>
  );
};

