function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;
    return (
        <li class="collection-item ">
            {name}{' '}
            <i
                class="material-icons basket-decrement"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            x{quantity}
            <i
                class="material-icons basket-decrement"
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            = {price * quantity}$
            <span
                class="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i class="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}

export { BasketItem };
