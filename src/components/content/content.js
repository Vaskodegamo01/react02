import React from 'react';
import './content.css'

const Content = (props) => {
    return (
        <div id="content">
            <p><strong>{props.content}</strong>Много всякого текста</p>
            <img src={props.link} width="640" height="360" alt="пейзаж"/>
            <p>И тут много текста</p>
        </div>
    )
};

export default Content;