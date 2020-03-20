import { priceFormat } from "../../helpers/priceHelper.js";

const price = priceFormat(100000);

const Item = () => {
    return (
        <div>
            Item {price}
        </div>
    );
}

export default Item;
