import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from '../LandingPage/CardDetails/CardDetailsComp';
import Footer from "../LandingPage/Footer/Footer"


const XCraft = () => {
    let data = {
        title: "xCraft Enterprises, Inc.",
        logourl:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f9740c55aaa3925b7ae05e3/images/startup_image/profile_logo.jpg",
        tagLineTi: "America's Drone Company",
        cardimg:
            "https://d19j0qt0x55bap.cloudfront.net/production/startups/5f9740c55aaa3925b7ae05e3/campaign/images/desktop_be76b692-2b90-4f61-967c-d1398bcd09c0.png",
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
            <div style={{padding:"0 100px",textAlign:"center"}}>
                <h2 style={{ fontFamily: "monospace", color: "orange" }}>OVERVIEW</h2>
                <h1 style={{ fontFamily: "monospace",margin:"50px 0",color:"green" }}>America’s Drone Company</h1>
                <p style={{textAlign:"justify",width:"90%" ,margin:" 70px auto"}}>xCraft develops technology that powers the future of autonomous flight. With a launch on ABC’s Shark Tank, xCraft has become “America’s Drone Company” creating an arsenal of innovative, patented drone systems that have forever changed the UAV landscape. Now we’re launching our products into a marketplace full of demand for the solutions we’ve crafted.
                </p>
                <img src="https://d2j6gq8tvnyhoe.cloudfront.net/a9cbef98-861c-4170-852b-aa525f5b4bd5.jpeg" alt="ProblemImg" style={{ width: "80%", margin: "auto" }} />
                <h1 style={{ fontFamily: "monospace", margin: "50px 0", color: "green" }}>OUR VISION FOR THE FUTURE</h1>
                <h1>Flying Cars</h1>
                <p style={{textAlign:"justify",width:"90%" ,margin:" 70px auto"}}>Urban Air Mobility (AKA “flying cars”) is an exciting space that people have dreamed about for decades. It was part of our founder’s original vision to see xCraft’s technology used to help move people and things efficiently and autonomously through the vast open airspace. 
                </p>
                <img src="https://d2j6gq8tvnyhoe.cloudfront.net/ea759944-a59d-405f-8601-326b161033fd.jpeg" alt="Img" style={{ width: "80%", margin: "auto" }} />
                <video autoPlay src="https://thumbs.gfycat.com/DentalDistortedLeech-mobile.mp4" alt="SolutionImg" style={{ width: "80%", margin: " 50px auto" }} />
                
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>

    )
}

export default XCraft
