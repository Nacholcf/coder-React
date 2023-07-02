import {BsCart3} from "react-icons/bs";

export const NavBar = () => {
    return (
        <header>
            <div className='container'>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <img 
                    src={"https://hillsideclothes.000webhostapp.com/img/hillsidelogo.png"
                    } 
                    className="logo" 
                    alt="Vite logo" 
                    />
                    <span style={{ fontSize: 18, fontWeight: 'bolder' }}>Tienda</span>
                    <BsCart3 style={{fontSize: 30, color: 'orange' }} />
                    <nav>
                        <a>Remeras</a>
                        <a>Buzos</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};