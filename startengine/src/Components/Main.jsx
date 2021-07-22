import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar/Navbar'
import Achieve from './Achieve/Achieve'
import Card from './Card/Card'
import Footer from './Footer/Footer'


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
            <  Navbar />
            <Achieve/>
            <Card data={data} />
            <Footer/>
        </div>
    )
}
