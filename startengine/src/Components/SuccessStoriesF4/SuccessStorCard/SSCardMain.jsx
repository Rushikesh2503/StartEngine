import React from 'react';
import styled from "./SSCardMain.module.css"

const SSCardMain = (data) => {
    data = data.data;
    let { ssImgurl, logoUrl, ssTitle, ssDesc, ssRaised, ssMinIn } = data;
    return (
        <div className={styled.sscardMainDiv}>
            <img src={ssImgurl} alt="ssImg" className={ styled.ssImgC}/>
            <br />
            <img src={logoUrl} alt="ssLogo" />
            <h2>{ ssTitle}</h2>
            <p className={ styled.ssparaDesc} >{ssDesc}</p>
            <div className={styled.sslowerD}>
                <div>
                    <h3>{ssRaised}</h3>
                    <p>Raised</p>
                </div>
                <div>
                    <h3>{ssMinIn}</h3>
                    <p>Min.Investment</p>
                </div>
            </div>
        </div>
    )
}

export default SSCardMain
