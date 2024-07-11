import cart from '../../assets/cart.svg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" width="30" height="30"/>
            0
        </div>
    )
}

export default CartWidget;
