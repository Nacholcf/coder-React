import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
    return (
        <header className="navbar">
            <div className='container'>
                <div className="navbar__content"
                >
                    <img 
                    className="navbar__logo"
                    src={"https://hillsideclothes.000webhostapp.com/img/hillsidelogo.png"
                    } 
                    />
                    <nav className="navbar__items">
                        <a>Remeras</a>
                        <a>Buzos</a>
                    </nav>
                    <CartWidget />
                </div>
            </div>
        </header>
    );
};