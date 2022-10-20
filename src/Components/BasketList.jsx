import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul class="collection basket-list">
            <li class="collection-item active">Shop cart</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                    />
                ))
            ) : (
                <li class="collection-item ">Empty cart</li>
            )}
            <li class="collection-item active total-price">
                Total: {totalPrice}$
            </li>
            <li class="collection-item total-price">
                <button class="btn">Checkout</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
