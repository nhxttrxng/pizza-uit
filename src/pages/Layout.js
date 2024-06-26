import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};

export default Layout;
