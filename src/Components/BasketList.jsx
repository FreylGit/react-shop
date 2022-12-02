import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order,
        handleBasketWhow = Function.prototype,
        removeFromBasket = Function.prototype,
        plusQuantity = Function.prototype,
        minusQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        plusQuantity={plusQuantity}
                        minusQuantity={minusQuantity}
                    />
                ))
            ) : (
                <li className="collection-item active">Корзина пуста</li>
            )}
            <li className="collection-item">
                Общая стоимость:{totalPrice} Руб
            </li>
            <li className="collection-item">
                <button className="secondary-content btn-small">Офорить</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketWhow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
