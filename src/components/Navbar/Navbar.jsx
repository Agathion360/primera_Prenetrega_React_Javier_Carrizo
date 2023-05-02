import  './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';


const navbar = () => {
  return (
   
      <header className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <h1 className='nombreTienda'>Rugby Pro Shop</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">                
                  Home                
              </li>
              <li className="nav-item">                
                  Nosotros                
              </li>
              <li className="nav-item">               
                  Productos               
              </li>   
              <li className="nav-item">               
                  Estemos en Contacto               
              </li>          
            </ul>        
          </nav>
          <CartWidget /> 
        </div>               
      </header>
  
  );
}

export default navbar
