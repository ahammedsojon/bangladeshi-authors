import React from 'react';
import './Li.css'

const Li = (props) => {
    const { name, img } = props;
    return (
        <div className="li">
            <img src={img} alt="" />
            <h5 className="text">{name}</h5>
        </div>
    );
};

export default Li;