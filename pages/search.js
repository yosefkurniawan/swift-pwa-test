import Search from "../src/components/pages/search";
import Layout from "../src/components/layouts";

export async function getStaticProps() {
    const pageConfig = {
        title: "Shearch Product",
        className: "search"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Search);