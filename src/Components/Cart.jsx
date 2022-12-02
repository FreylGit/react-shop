function Cart(props) {
    const { quantity = 0, handleBasketWhow = Function.prototype } = props;

    return (
        <div
            className="cart grey darken-3 white-text"
            onClick={handleBasketWhow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
