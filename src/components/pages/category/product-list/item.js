import { priceFormat } from "../../../commons/price/priceFormat";

const price = priceFormat(100000);

const Item = () => {
    return (
        <div>
            Item {price}
        </div>
    );
}

export default Item;
