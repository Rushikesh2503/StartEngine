import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar/Navbar'
import Achievements from "./Achievements/Achievements";
import Card from './Card/Card'
import GeneralInfoF3 from "./GeneralInfoFront3/GeneralInfoF3";
import SuccessStoriesF4 from "./SuccessStoriesF4/SuccessStoriesF4";
import BlogFP from "./BlogFP/BlogFP";
import InvestFundFP from "./InvestFundFP/InvestFundFP";
import Footer from "./Footer/Footer";


export default function Mains() {

    const [data,setData] = useState([])
     
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/data`)
        const { data } = response
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    return (
        <div>
            <Navbar />
            <Achievements/>
            <Card data={data} />
            <GeneralInfoF3 />
            <SuccessStoriesF4 />
            <BlogFP />
            <InvestFundFP />
            <Footer />
        </div>
    )
}
