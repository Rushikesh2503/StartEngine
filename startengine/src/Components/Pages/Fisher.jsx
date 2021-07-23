import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from './CardDetails/CardDetailsComp';

const Fisher = () => {
    const data = {
        title: "Fisher Wallace Laboratories",
        logourl:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f344d3f7eb65b05c1b59e27/images/startup_image/profile_Logo__17_.jpg",
        tagLineTi: "Medical Devices for Mood and Sleep",
        cardimg:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f344d3f7eb65b05c1b59e27/images/startup_cover/desktop_044a5459-edit__1_.jpg",
        desc: "Fisher Wallace is a leading non-surgical electronics company for the brain. Our first product, the Fisher Wallace Stimulator®, is FDA-Cleared to treat depression, anxiety and insomnia. The device has been used by over 70,000 patients and is currently undergoing review by the FDA for new Approval and Clearance.",
        raised: "$2,861,272",
        prevCrFund: "$1,060,983",
        investors: "1745",
        valuation: "$40M",
        priceperShare: "6.21",
        minInves: "$496.80",
        sharesOff: "Common",
        offeringType: "Equity",
        offMax: "$510.4M",
        offering: "Reg A+",
    };
    return (
        <div>
            <Navbar />
            <div>
                <CardDetailsComp data={data}/>
            </div>
        </div>
    )
}

export default Fisher

 


