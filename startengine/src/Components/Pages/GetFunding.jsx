import Navbar from '../LandingPage/Navbar/Navbar'
import Dashboard from '../LandingPage/GetFunding/Dashboard'
import Funding from '../LandingPage/GetFunding/Funding'
import Achievements from "../LandingPage/Achievements/Achievements";
import Footer from "../LandingPage/Footer/Footer";



export default function GetFunding() {
    
    return (
        <div>
            <Navbar />
            <Funding/>
            <Achievements />
            <Dashboard/>
            <Footer />
        </div>
    )
}
