import Account from "../../src/components/pages/customer/account";
import Layout from "../../src/components/layouts";

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
