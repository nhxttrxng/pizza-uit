import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Table from "../pages/Table/Table";
import OrderProduct from "../pages/OrderProduct/OrderProduct";
import Checkout from "../pages/Checkout";

const Router = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/table", component: Table },
    { path: "/orderProduct/:foodId", component: OrderProduct },
    { path: "/checkout", component: Checkout },
];
export default Router;
