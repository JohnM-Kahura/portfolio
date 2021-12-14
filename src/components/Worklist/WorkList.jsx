import React from 'react'
import './worklist.scss'
function WorkList({frontend,language,backend,database,worthy_mention }) {
    return (
        <ul className='worklist'>

            <li>{frontend}</li>
            <li>{language}</li>
            <li>{backend}</li>
            <li>{database}</li>
            <li>{worthy_mention}</li>
           
        </ul>
    )
}

export default WorkList
