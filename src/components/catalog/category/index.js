import Filter from "./filter"
import Sorting from "./sorting"
import ProductList from "./product-list"
import Head from "next/head";
import Layout from "../../../theme/layout";

const Category = () => {
    return (
        <>
            <Head>
                <title>Category Name</title>
            </Head>

            <h1>CLP - Category Name</h1>
            <Filter />
            <Sorting />
            <ProductList />
        </>
    );
}

export default Layout(Category);
