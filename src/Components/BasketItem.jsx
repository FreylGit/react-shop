function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        plusQuantity = Function.prototype,
        minusQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item">
            {name} = {price * quantity}
            <button className="edit-quantity" onClick={() => minusQuantity(id)}>
                -
            </button>
            {quantity}
            <button className="edit-quantity" onClick={() => plusQuantity(id)}>
                +
            </button>
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}

export { BasketItem };
