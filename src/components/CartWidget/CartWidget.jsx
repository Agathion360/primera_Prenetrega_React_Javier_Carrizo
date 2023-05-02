import  './CartWidget.css'

const CartWidget = () => {
  const img="https://img.icons8.com/?size=512&id=2212PsH6OEOq&format=png"
  return (
    <div className='contenedorCarrito d-flex'>
        <img className='carrito' src={img} alt="carrito" />
        <p className='cantidad'>5</p>
    </div>
    
  );
}

export default CartWidget
