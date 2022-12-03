import { GoodsItem } from "./GoodsItem";
import { ShopContext } from "../context";
import { useContext } from "react";

function GoodList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h1>Нет ответа</h1>;
    } else {
        return (
            <div className="goods">
                {goods.map((item) => (
                    <GoodsItem key={item.id} {...item} />
                ))}
            </div>
        );
    }
}

export { GoodList };
