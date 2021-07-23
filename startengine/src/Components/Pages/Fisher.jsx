import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from '../LandingPage/CardDetails/CardDetailsComp';
import Footer from "../LandingPage/Footer/Footer"

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
            <div style={{padding:"0 100px",textAlign:"center"}}>
                <h1 style={{fontFamily:"monospace",color:"orange"}}>--THE PROBLEM--</h1>
                <img src="https://d2j6gq8tvnyhoe.cloudfront.net/3a4b078c-7ed6-4c3c-bf53-ca710b5f76a5.jpeg" alt="ProblemImg" style={{ width: "80%", margin: "auto" }} />
                <h1 style={{ fontFamily: "monospace",margin:"50px 0",color:"green" }}>--THE SOLUTION--</h1>
                <h2 style={{ fontFamily:"Times New Roman",margin:"50px 0" }}>FDA Regulated Wearable Treatment</h2>
                <img src="https://d2j6gq8tvnyhoe.cloudfront.net/bc9d2350-b2e4-4be7-b7d2-0623d9d41beb.gif" alt="SolutionImg" style={{ width: "80%", margin: " 20px auto" }} />
                <p style={{textAlign:"justify",width:"1100px" ,margin:" 150px auto"}}>
                    The Fisher Wallace Stimulator® comfortably stimulates the brain to produce serotonin and modulate brainwave activity. The device has demonstrated a high effectiveness rate and less than a 1% side effect rate (temporary headache or dizziness) in clinical practice. Our affordable medical device is easy to use and may be prescribed remotely and shipped directly to a patient’s home.
                    <br /> This offers significant clinical and economic advantages over medication and behavioral therapy while also working well in conjunction with these standards of care (many providers prescribe the Fisher Wallace device in combination with medication and behavioral therapy). In a depression study conducted at Mount Sinai Beth Israel Hospital in 2015, patients who used a placebo device returned to baseline while patients who used an active (fully functioning) device experienced durable depression symptom reduction.
                </p>
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Fisher

 


