import React, { useEffect, useState } from 'react'
import PortFolioList from '../portfoliolist/PortFolioList'
import "./portfolio.scss"
import API from '../../baseURL'
import {
    featuredPortfolio, 
    webPortfolio,
    mobilePortfolio,

    scriptsPortfolio,
} from '../../data'
function PortFolio() {
    const [selected, setselected] = useState("featured")
    const [data, setdata] = useState([])
    const [featured, setfeatured] = useState([])
    const [web, setweb] = useState([])
    const [mobile, setmobile] = useState([])
    const [scripts, setscripts] = useState([])
    
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
const filter= (dataList)=>{
//    var filteredItems=[];
//     for(let i = 0; i < dataList.length; i++){
//         if(dataList[i]['type']==='Featured'){
//             filteredItems.push(dataList[i])
//         }else if(dataList[i]['type']==='Web Apps'){
//             filteredItems.push(dataList[i])
//     }
//         else if(dataList[i]['type']==='Mobile Apps'){
//             filteredItems.push(dataList[i])
//     }
//         else if(dataList[i]['type']==='Python Scripts'){
//             filteredItems.push(dataList[i])
//     }
// }

    // console.log(filteredItems)
    // return filteredItems

   
}
    useEffect(() => {
        API.get('portfolio/').then(res => {
        //   console.log(res.data[0])
          
      setdata(res.data)
        
        
        }).catch(err => {
            console.log(err)
        })
        

       

       
        switch (selected) {
            case "featured":
                
                const featuredItems= data.filter(item =>item['type']==='Featured')
                setdata(featuredItems)
                break;
            case "web":
                const web= data.filter(item =>item['type']==='Web Apps')
                setdata(web)
                break;
            case "mobile":
                const mobile= data.filter(item =>item['type']==='Mobile Apps')
                setdata(mobile)
                break;
            case "scripts":
                const scripts= data.filter(item =>item['type']==='Python Scripts')
                setdata(scripts)
                break;
            default:
                const feturedItems= data.filter(item =>item['type']==='Featured')
                setdata(feturedItems)
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
