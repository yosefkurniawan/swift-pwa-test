import Product from "../../src/components/catalog/product";
import Layout from "../../src/theme/layout";

export async function getServerSideProps() {
    const pageConfig = {
        title: "Product",
        className: "product"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Product);