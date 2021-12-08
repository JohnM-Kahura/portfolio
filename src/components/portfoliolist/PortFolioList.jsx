import './portfoliolist.scss'

function PortFolioList({title, active,id,setselected}) {
    return (
        <li className={active ?"portfoliolist active":"portfoliolist"} 
        onClick ={()=>setselected(id)}>
            {title}
        </li>
    )
}

export default PortFolioList
