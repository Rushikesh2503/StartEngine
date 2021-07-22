import React from 'react';
import SSCardMain from './SuccessStorCard/SSCardMain';
import { v4 as uuid } from 'uuid';
import styled from "./SuccessStoriesF4.module.css"

let data1 = [{
    ssImgurl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/Knightscope_Startengine_success_story.png",
    logoUrl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/KnightScope_logo.png",
    ssTitle: "Knightscope",
    ssDesc: "Knightscope designs, engineers, builds, deploys and supports award-winning crime-fighting fully autonomous security robots and offers them on a Machine-as-a-Service (MaaS) business model in the U.S.",
    ssRaised: "$24.3M",
    ssMinIn:"$1K",   
},{
    ssImgurl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/FarmOne_Hero.png",
    logoUrl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/Farm_One_Logo.png",
    ssTitle: "Farm.One",
    ssDesc: "Farm.One grows rare produce in New York City Urban verticle farms using hydroponics and LED lighting. They sell an enormous range of rare herbs, edible flowers and microgreens to NYC’s best chefs. All grown locally, without pesticides, just minutes away.",
    ssRaised: "$446K",
    ssMinIn:"$301",   
},{
    ssImgurl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/REd_Mountain_Resort_Hero.png",
    logoUrl: "https://mk0blogstarteng8gb57.kinstacdn.com/wp-content/uploads/2020/08/RED_Mountain_Logo.png",
    ssTitle: "RED Mountain Resort",
    ssDesc: "RED Mountain is an Endangered Species within the ski resort world. They have the snowfall, vertical drop, world-class terrain and 4-season fun to go boot-to-boot with the Big Guys, but have consciously maintained their mom ’n’pop/weird uncle feel for over 100 years.",
    ssRaised: "$1.1M",
    ssMinIn:"$424",   
},]

const SuccessStoriesF4 = () => {
    return (
        <><h1 style={{textAlign:"center"}}>Success Stories</h1>
        <div className={styled.ssMmainD}>
            {
                data1.map((e) => 
                    <SSCardMain key={uuid()} data={e}/>
                )
            }
            </div>
            </>
    )
}

export default SuccessStoriesF4
