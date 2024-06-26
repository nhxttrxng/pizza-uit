import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import ListRouter from "./Router/Router";
import Layout from "./pages/Layout";
import Admin from "./Admin/Login/Admin";
import HeaderAdmin from "./Admin/HeaderAdmin/HeaderAdmin";
import ListMenu from "./Admin/ListMenu/ListMenu";
import ManageTable from "./Admin/ManageTable/ManageTable";
import "./scss/index.scss";

function App() {
    return (
        <>
            <Routes>
                {ListRouter.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
                <Route path="/admin" element={<Admin />}></Route>
                <Route
                    path="/listmenu"
                    element={
                        <>
                            <HeaderAdmin />
                            <ListMenu />
                        </>
                    }
                ></Route>
                <Route
                    path="/manage"
                    element={
                        <>
                            <HeaderAdmin />
                            <ManageTable />
                        </>
                    }
                ></Route>
                <Route path="*" element="404 PAGE"></Route>
            </Routes>
        </>
    );
}

export default App;
