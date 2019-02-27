import React from 'react';
import './footer.css'

const Footer = (props) => {
    return (
        <div id="footer">
            <strong>{props.footer}</strong>
        </div>
    )
};

export default Footer;