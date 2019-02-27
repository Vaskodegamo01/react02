import React from 'react';
import './header.css'

const Header = (props) => {
    return (
        <div id="header">
            <strong>{props.header}</strong>
            <ul id="navigation">
                <li><a href={props.link1}>{props.sidebar1}</a></li>
                <li><a href={props.link2}>{props.sidebar2}</a></li>
                <li><a href={props.link3}>{props.sidebar3}</a></li>
                <li><a href={props.link4}>{props.sidebar4}</a></li>
            </ul>
        </div>
    )
};

export default Header;