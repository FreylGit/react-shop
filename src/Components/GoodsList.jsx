import { GoodsItem } from "./GoodsItem";

function GoodList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h1>Нет ответа</h1>;
    } else {
        return (
            <div className="goods">
                {goods.map((item) => (
                    <GoodsItem
                        key={item.id}
                        {...item}
                        addToBasket={addToBasket}
                    />
                ))}
            </div>
        );
    }
}

export { GoodList };
