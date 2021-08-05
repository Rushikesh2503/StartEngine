import React from 'react';
import styled from "./CardDetailsComp.module.css";


const CardDetailsComp = ({data}) => {
    return (
        <div className={styled.mainCardDiv}>
            <div className={styled.navHead}>
                <div>
                    <img src={data.logourl} alt="logo" className={styled.logoImg}/>
                </div>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.tagLineTi}</p>
                </div>
            </div>
            <div className={styled.frontBoxd}>
                <div className={styled.imgDivProd}>
                    <img src={data.cardimg} alt="CImg" className={styled.Prodimg} />
                    <p className={styled.paraDesc}>{data.desc}</p>
                </div>
                <div className={styled.invMainDivData}>
                    <div>
                        <div>
                            <h1 className={styled.graytext}><span style={{color:"black"}}>{data.raised}</span> raised</h1>
                            <h3 className={styled.graytext}><span className={styled.greenText}>{data.prevCrFund}</span> previously crowdfunded</h3>
                        </div>
                        <hr className={styled.greenLine} />
                        <div>
                            <div className={styled.boxesInvest}>
                                <div>
                                    <h3>{data.investors}</h3>
                                    <p className={styled.graytext}>Investors</p>
                                </div>
                                <div>
                                    <h3>{data.valuation}</h3>
                                    <p className={styled.graytext}>Valuation</p>
                                </div>
                            </div>
                            <div className={styled.boxesInvest}>
                                <div>
                                    <h3>{data.priceperShare}</h3>
                                    <p className={styled.graytext}>Price per Share</p>
                                </div>
                                <div>
                                    <h3>{data.minInves}</h3>
                                    <p className={styled.graytext}>Min.Investment</p>
                                </div>
                            </div>
                            <div className={styled.boxesInvest}>
                                <div>
                                    <h3>{data.sharesOff}</h3>
                                    <p className={styled.graytext}>Shares Offered</p>
                                </div>
                                <div>
                                    <h3>{data.offeringType}</h3>
                                    <p className={styled.graytext}>Offering Type</p>
                                </div>
                            </div>
                            <div className={styled.boxesInvest}>
                                <div>
                                    <h3>{data.offMax}</h3>
                                    <p className={styled.graytext}>Offering Max</p>
                                </div>
                                <div>
                                    <h3>{data.offering}</h3>
                                    <p className={styled.graytext}>Offering</p>
                                </div>
                            </div>
                        </div>
                        <button className={styled.invBtn}>Invest Now</button>
                        <p className={styled.graytext2}>This Reg A+ offering is made available through StartEngine Primary, LLC.</p><p className={styled.graytext2}>This investment is speculative, illiquid, and involves a high degree of risk, including the possible loss of your entire investment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsComp
