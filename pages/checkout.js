import Checkout from "../src/components/checkout";
import Layout from "../src/theme/layout";

export async function getStaticProps() {
    const pageConfig = {
        title: "Checkout",
        className: "checkout"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Checkout);
