import "@cdssnc/gcds-components-react/gcds.css"
import { Outlet } from "react-router-dom";
import Header from '../Layout/Header'
import Footer from "./Footer"
import "./Layout.css"

export default function Layout() {

    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />

        </>
    );
}