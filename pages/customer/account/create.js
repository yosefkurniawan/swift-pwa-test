import Layout from "../../../src/components/layouts";
import Register from "../../../src/components/pages/customer/register";

export async function getStaticProps() {

    // Page Configuration:
    // - title
    // - className
    const pageConfig = {
        title: "Resgiter",
        className: "register"
    };

    // By returning { props: pageConfig }, the Page component
    // will receive `pageConfig` as a prop at build time
    return {
        props: {
            pageConfig
        }
    };
}

export default Layout(Register);
