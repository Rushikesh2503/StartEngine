import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
     
    return (
        <div className={styles.main} >
            <h1>Onboarding:</h1>
            <div>
                <h3>Dedicated Account Manager</h3>
                <p>You receive a dedicated account manager to help prepare your offering, which will then be reviewed by StartEngine’s compliance team.</p>
            </div>
            <div>
                <h3>Dedicated Campaign Strategist</h3>
                <p>We’re a leader in customer service for a reason. Our dedicated Campaign Strategist’s will work closely with you for the duration of your campaign. </p>
            </div>
            <div>
                <h3>SEC Filings</h3>
                <p>StartEngine will help file all the necessary paperwork to accept funds under Reg CF, so you can get back to what matters most.</p>
            </div>
            <h1>Investments:</h1>
            <div>
                <h3>Rolling Fund Withdrawals</h3>
                <p>Withdraw funds when you’re ready to invest into your company or fundraising campaign.</p>
            </div>
            <div>
                <h3>Credit Card Investments</h3>
                <p>On StartEngine, companies can accept investments via credit cards, as well as ACH, bank wire, and cryptocurrency. </p>
            </div>
            <div>
                <h3>Campaign Perks</h3>
                <p>StartEngine encourages incentivizing investors by offering perks to investors. This could be a lifetime discount, a product, or even a time-based incentive.</p>
            </div>
            <h1>Dashboard:</h1>
            <div>
                <h3>Real-Time Analytics</h3>
                <p>Use the StartEngine analytics dashboard to view all investment data, from visitor conversion rates to investment history.</p>
            </div>
            <div>
                <h3>Investment History</h3>
                <p>View and follow the number of investors and followers your campaign has week over week.  </p>
            </div>
            <div>
                <h3>Investor Information</h3>
                <p>Access your investor community’s contact information for updates or promotional purposes.</p>
            </div>
            
        </div>
    )
}
export default Dashboard