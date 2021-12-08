import React, { useEffect, useState } from 'react'
import PortFolioList from '../portfoliolist/PortFolioList'
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,

    scriptsPortfolio,
} from '../../data'
function PortFolio() {
    const [selected, setselected] = useState("featured")
    const [data, setdata] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Apps",

        },
        {
            id: "mobile",
            title: "Mobile Apps",

        },
        {
            id: "scripts",
            title: "Python Scripts",

        },
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setdata(featuredPortfolio)
                break;
            case "web":
                setdata(webPortfolio)
                break;
            case "mobile":
                setdata(mobilePortfolio)
                break;
            case "scripts":
                setdata(scriptsPortfolio)
                break;
            default:
                setdata(featuredPortfolio)
                break;
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortFolioList title={item.title} active={selected === item.id} id={item.id} setselected={setselected} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>

                ))}


            </div>
        </div>
    )
}

export default PortFolio
