import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cuid from "cuid";


const Hamburger = () => {
    const [navOpen, setNavOpen] = useState(false)
    const history = useHistory();
    const data = ['home', 'about', 'projects', 'skills']

    return (
        <div className={`hamburger ${navOpen ? "open" : ""}`}>
            <ul
                className={ navOpen ? 'active' : '' }>
                <figure 
                    onClick={ ()=>setNavOpen(!navOpen) }
                    className={ navOpen ? "isWhite" : "" }
                    >
                    <FontAwesomeIcon class="" icon={faBars}/>
                </figure>
                {data.map((link) => (
                    <li  
                        key={cuid()} 
                        onClick={ ()=>history.push(`/${link}`) }>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Hamburger;