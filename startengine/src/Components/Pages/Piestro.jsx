import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import CardDetailsComp from '../LandingPage/CardDetails/CardDetailsComp';
import Footer from "../LandingPage/Footer/Footer";

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
                   {/* {<img url="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/cf8caeb6-0762-4490-83fc-c0cd28570fdd.gif" max-width="600" image-width="100" ng-src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/cf8caeb6-0762-4490-83fc-c0cd28570fdd.gif" src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/cf8caeb6-0762-4490-83fc-c0cd28570fdd.gif">} */}
                <CardDetailsComp data={data}/>
            </div>
            <div style={{padding:"0 100px",textAlign:"center"}}>
                <h2 style={{ fontFamily: "Arial", color: "orange" }}>OVERVIEW</h2>
                <h1 style={{ fontFamily: "Arial", margin: "50px 0", color: "green" }}>Piestro: A revolutionary, high quality pizzeria without the high operational costs</h1>
                <img src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/3b3c974c-b575-452b-aeba-8a7fac9146af.jpg" alt="ProblemImg" style={{ width: "80%", margin: "30px auto" }} />
                
                <p style={{textAlign:"justify",width:"90%" ,margin:" 70px auto"}}>Piestro provides a high quality artisanal pizza experience and solves the two biggest problems in traditional restaurants: expensive labor and real estate costs. A Piestro Pizzaria is roughly the size of two vending machines and is fully autonomous, requiring no employees to operate, as opposed to the average pizza restaurant’s 9.5 employees. While the time to launch a traditional restaurant is about 9-12 months, with Piestro, we believe based with our initial prototype that an existing pizza chain can have our pod up and running within two weeks, subject to regulatory approval, at a cost of only $50,000, which is about ⅙ of the median total restaurant startup cost.The average hourly and annual wages of a restaurant cook were $13.06 and $27,170 in 2018, respectively. For typical restaurants that employ 9.5 employees, payroll costs would be a minimum of $271,700 annually. Piestro requires no labor to operate as it is fully automated, and only needs a part-time employee to service and refill ingredients periodically, which is expected to cost approximately $7,500 per year based on our initial prototype.
                </p>
                <img src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/5d11b183-d4c7-4acd-a29f-3379cc795845.gif" alt="ProblemImg" style={{ width: "80%", margin: "30 pxauto" }} />
                <p style={{textAlign:"justify",width:"90%" ,margin:" 70px auto"}}>Piestro is an automated robotic pizza shop that delivers high-quality artisanal pizzas within 3 minutes. Because robots don’t sleep, we are able to keep our shops open 24/7 and customers have the option to order ahead, so that pizza is ready when they arrive.On vending machines, we don’t consider ourselves to be part of this ‘trend.’ Piestro is truly an automated pizzeria – we aren’t frozen food, and we don’t compromise on taste for speed. We are a true producer of artisanal pizza with restaurant level quality that past machines simply didn’t deliver in terms of key components like flavor, texture and ingredients.With three decades of food and robotics expertise, we have designed Piestro to be able to cook restaurant-quality pizzas, using the highest quality ingredients, right in front of you - a fun and entertaining experience for the whole family! Piestro is currently in the prototype and development phase.Pizza is the #1 most popular food in the US and on any given day, about 13% (or 1 in 8) of Americans eat pizza. Piestro’s target market is millennials and generation Z. According to a recent study, 32% of millennials and 41% of Gen Z-ers are willing to pay premium prices for sustainably sourced ingredients like ours. Pizza is also popular on social media, which means it resonates with our target customers. In fact, the hashtag “#pizza” has been used 49.6 million times on Instagram. As per a study by Gousto, a British meal kit retailer, Pizza is the #1 most popular food on Instagram with 37.9M posts. 
                </p>
                <img src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/cf8caeb6-0762-4490-83fc-c0cd28570fdd.gif" alt="SolutionImg" style={{ width: "80%", margin: " 20px auto" }} />
                <img src="https://d19j0qt0x55bap.cloudfront.net/production/startups/5f80ba6c7eb65b4025318b52/campaign/images/40f27074-3029-42e8-8a95-4bb0bb71caca.jpg" alt="ProblemImg" style={{ width: "60%",height:"400px", margin: "30px auto" }} />
                
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Piestro
