import React from "react";
import "./menu-item.scss";

const MenuItem = ({title, imageUrl, size})=>(
    <div 
    style={{backgroundImage: `url(${imageUrl})`}}
    className={`${size} menu-item`}>
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'></span>
        </div>
    </div>
);

export default MenuItem;