import React from 'react';
import styled from "./BlogFP.module.css"

const BlogFP = () => {
    return (
        <div>
            <div className={styled.blTit}>
                <h1>Learn More From Our Blog</h1>
                <button>Read More</button>
            </div>
            <div className={styled.blogsMainD}>
                <div className={styled.blogSubInd}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/07/venture_capital_vs_equity_crowdfunding.png" alt="Blog1" />
                    <h3>Startup Funding Without the Golden Handcuffs</h3>
                    <p>See how StartEngine stacks up against venture capital...</p>
                </div>
                <div className={styled.blogSubInd}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/Mr.Wonderful_Joins_StartEngine.png" alt="Blog2" />
                    <h3>Mr. Wonderful Joins StartEngine</h3>
                    <p>Renowned investor and businessman Kevin O’Leary has joined StartEngine as our Strategic Advisor...</p>
                </div>
                <div className={styled.blogSubInd}>
                    <img src="https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2019/03/investing_in_startups.png" alt="Blog3" />
                    <h3>Investing in Startups 101</h3>
                    <p>Learn how investing in startups works in this introductory blog post...</p>
                </div>
            </div>
        </div>
    )
}

export default BlogFP
