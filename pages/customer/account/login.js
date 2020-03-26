import Layout from "../../../src/components/layouts";
import Login from "../../../src/components/pages/customer/login";

export async function getStaticProps() {

    // Page Configuration:
    // - title
    // - className
    const pageConfig = {
        title: "Login",
        className: "login"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Login);
