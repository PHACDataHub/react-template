import "@cdssnc/gcds-components-react/gcds.css"
import { Outlet } from "react-router-dom";
import Header from '../Components/Header'
import Footer from "../Components/Footer"
import "./Layout.css"

export default function Layout() {

    return (
        <>
            <Header />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />

        </>
    );
}