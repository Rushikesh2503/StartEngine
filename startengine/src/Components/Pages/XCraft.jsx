import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from './CardDetails/CardDetailsComp';

const XCraft = () => {
    let data = {
        title: "xCraft Enterprises, Inc.",
        logourl:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f9740c55aaa3925b7ae05e3/images/startup_image/profile_logo.jpg",
        tagLineTi: "America's Drone Company",
        cardimg:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f9740c55aaa3925b7ae05e3/images/startup_cover/desktop_main_image-xcraft.jpg",
        desc: "Coined the “American Drone Company”, xCraft designs and manufactures customized, unmanned aerial systems for enterprise and military markets.",
        raised: "$703,690",
        prevCrFund: "$2,138,256",
        investors: "720",
        valuation: "$35M",
        priceperShare: "$7.82",
        minInves: "$351.90",
        sharesOff: "Common",
        offeringType: "Equity",
        offMax: "$7M",
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

export default XCraft
