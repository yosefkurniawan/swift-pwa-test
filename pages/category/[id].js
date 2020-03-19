import Category from "../../src/components/category";
import Layout from "../../src/theme/layout";

export async function getServerSideProps() {
    const pageConfig = {
        title: "Category",
        className: "category"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Category);