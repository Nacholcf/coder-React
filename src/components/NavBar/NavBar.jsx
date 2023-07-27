import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
    return (
    <>
        <header className="navbar">
            <div className='container'>
                <div className="navbar__content">
                <NavLink to="/">
                    <img 
                    className="navbar__logo"
                    src={"https://hillsideclothes.000webhostapp.com/img/hillsidelogo.png"
                    } 
                    />
                  </NavLink>
                  <nav className="navbar__items">
                  <NavLink 
                  to={"/category/remeras"}
                  style={({ isActive }) => ({
                  color: isActive ? "#912d5a" : "#912d5a",
                  })}
                 >
                  Remeras
                  </NavLink>
                  <NavLink
                  to={"/category/oversize"}
                  style={({ isActive }) => ({
                  color: isActive ? "#912d5a" : "#912d5a",
                  })}
                >
                  Oversize
                  </NavLink>
                  <NavLink
                  to={"/category/buzos"}
                  style={({ isActive }) => ({
                  color: isActive ? "#912d5a" : "#912d5a",
                  })}
                >
                  Buzos
                  </NavLink>
                  </nav>
                <CartWidget />
              </div>
            </div>
        </header>
         <Outlet />
       </>
    );
};