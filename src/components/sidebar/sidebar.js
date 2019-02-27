import React from 'react';
import './sidebar.css'

const Sidebar = (props) => {
    return (
        <div id="sidebar">
            <p><strong>{props.sidebar}</strong></p>
            <ul>
                <li><a href={props.link1}>{props.sidebar1}</a></li>
                <li><a href={props.link2}>{props.sidebar2}</a></li>
                <li><a href={props.link3}>{props.sidebar3}</a></li>
                <li><a href={props.link4}>{props.sidebar4}</a></li>
            </ul>
        </div>
    )
};

export default Sidebar;