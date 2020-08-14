import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NavCard = (props) => {
    const history = useHistory();
    const [size, setSize] = useState(true);

    function handleEvents(state) {
        if (state) {
        setSize(true)
        } else {
        setSize(false)
        }
    };

    return (
        <p 
            onClick={()=>history.push(`/${props.name}`)}
            onMouseEnter={()=>handleEvents(false)}
            onMouseLeave={()=>handleEvents(true)}
            className={size ? "shrink" : "grow"}>

            {props.name}
            
        </p>
    );
};

export default NavCard;