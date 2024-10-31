import "@cdssnc/gcds-components-react/gcds.css"
import Header from '../Components/Header'
import Footer from "../Components/Footer"
import "./Layout.css"
import { Outlet } from 'react-router-dom'; 

export default function Layout() {
    
    return (
        <>
            <Header />
            <gcds-container size="xl" centered="true" padding="400" style={{flexGrow: 1}}>
                <Outlet />
            </gcds-container>
            <Footer/>

        </>
    )
}