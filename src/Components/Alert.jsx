import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context";
function Alert(props) {
    const { name = "", closeAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} Добален в корзину</div>
        </div>
    );
}

export { Alert };
