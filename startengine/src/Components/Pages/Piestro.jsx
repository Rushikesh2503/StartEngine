import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from './CardDetails/CardDetailsComp';

const Piestro = () => {
    let data = {
        title: "Piestro",
        logourl:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/images/startup_image/profile_profile_3d349b80-3211-4772-9f2d-53e18aedb92a.jpg",
        tagLineTi: "The Future of Artisanal Pizza",
        cardimg:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/images/startup_cover/desktop_tombstone_graze_hero_for_se__2_.jpg",
        desc: "Our goal is that Piestro will be a robotic pizza shop able to deliver high-quality artisanal pizzas within 3 minutes. Our fully-automated machines are being designed with the aim of allowing for zero contact food preparation, zero food waste, consistent quality, and a much lower cost of operation. With our innovative design, Piestro will be introducing a new economic paradigm for food.",
        raised: "$1,279,922",
        prevCrFund: "$1,060,983",
        investors: "623",
        valuation: "$12M",
        priceperShare: "2.56",
        minInves: "$1,000.00",
        sharesOff: "Common",
        offeringType: "Equity",
        offMax: "$5M",
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

export default Piestro
