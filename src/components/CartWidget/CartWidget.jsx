import {BsCart3} from "react-icons/bs";
import "./CartWidget.css";
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom"; 

export const CartWidget = () => {
const { getCartQty } = useCartContext();
const navigate = useNavigate();
return (
  <div className="cart-widget" onClick={() => navigate("/cart")}>
    <BsCart3 style={{fontSize: 30, color: '912d5a' }} />{getCartQty ?  <span className="cart-widget__qty">({getCartQty})</span> : null}
  </div>
    );
};