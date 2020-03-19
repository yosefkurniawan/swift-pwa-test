import Account from "../../src/components/customer/account";
import Layout from "../../src/theme/layout";

export async function getStaticProps() {
    const pageConfig = {
        title: "Customer Dashboard",
        className: "account dashboard"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Account);
