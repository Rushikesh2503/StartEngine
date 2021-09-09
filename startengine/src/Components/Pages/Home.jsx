import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../LandingPage/Navbar/Navbar'
import Achievements from "../LandingPage/Achievements/Achievements";
import Card from '../LandingPage/Card/Card'
import GeneralInfoF3 from "../LandingPage/GeneralInfoFront3/GeneralInfoF3";
import SuccessStoriesF4 from "../LandingPage/SuccessStoriesF4/SuccessStoriesF4";
import BlogFP from "../LandingPage/BlogFP/BlogFP";
import InvestFundFP from "../LandingPage/InvestFundFP/InvestFundFP";
import Footer from "../LandingPage/Footer/Footer";



export default function Mains() {

    const [data,setData] = useState([])
     
    const fetchData = async () => {
        const response = await axios.get(`https://rushiapptest.herokuapp.com/data`)
        console.log('response:', response)
        const { data } = response
        console.log('data:', data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    return (
        <div>
            <Navbar />
            <Achievements/>
            <Card data={data}/>
            <GeneralInfoF3/>
            <SuccessStoriesF4/>
            <BlogFP/>
            <InvestFundFP/>
            <Footer/>
        </div>
    )
}
