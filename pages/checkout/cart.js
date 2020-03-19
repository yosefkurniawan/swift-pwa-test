import Cart from "../../src/components/checkout/cart";
import Layout from "../../src/theme/layout";

export async function getStaticProps() {
    const pageConfig = {
        title: "Shopping Cart",
        className: "cart"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Cart);