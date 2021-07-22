import React from 'react';
import styled from "./GeneralInfoF3.module.css"

const GeneralInfoF3 = () => {
    return (
        <div style={{margin:"30px 0 100px 0"}}>
            <div className={styled.GIF3Div1}>
                <h3> <span className={styled.greenText}>Be the first </span> to hear about our investment opportunities when they launch.</h3>
                <input type="text" className={styled.giDiv1inp} placeholder="Enter Email Address"/>
                <button className={styled.giDiv1btn}>Submit</button>
            </div>
            <div className={styled.GIF3Div2}>
                <div className={styled.gifd2}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/companies_on_startengine.png" alt="Disc_Img" />
                </div>
                <div className={styled.gifd2Desc}>
                    <h1>It's Your Turn to Be the Shark</h1>
                    <p>Discover over a hundred different investment opportunities and invest in the ideas and people you believe in.</p>
                </div>
            </div>
            <div className={styled.GIF3Div3}>
                <div className={styled.gifd2}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/09/find_entrepreneurs.png" alt="Disc_Img2" />
                </div>
                <div className={styled.gifd2Desc}>
                    <h1>Build a Portfolio of Alternative Investments</h1>
                    <p>Diversify your portfolio with startup investments and eventually other types of alternative assets, including real estate and more.</p>
                </div>
            </div>
            <div className={styled.GIF3Div2}>
                <div className={styled.gifd2}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/track_your_investments.png" alt="Disc_Img3" />
                </div>
                <div className={styled.gifd2Desc}>
                    <h1>Trade With Other Investors</h1>
                    <p>Not only are we simplifying startup investing, but we are also working to bring liquidity to you and let you trade your shares with other investors on <span className={styled.greenText}>StartEngine Secondary</span></p>
                </div>
            </div>
            <div className={styled.gif3last}>
                <p>All early stage investments posted on StartEngine entail risk; please read the educational materials found <span><a href="https://help.startengine.com/hc/en-us/articles/115002859503-Investor-Education-Guide-Regulation-Crowdfunding" className={styled.greenText}>here</a></span> to understand these risks.</p>
            </div>
        </div>
    )
}

export default GeneralInfoF3
