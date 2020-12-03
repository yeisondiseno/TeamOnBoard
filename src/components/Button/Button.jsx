import React from 'react';
import './Button.scss';

const Button = ({ title, icon, clase }) => (
    <button className={`btn ${clase}`}>
        { icon ? 
            <span>
                {icon}
            </span>
            :
            ''
        }
        {title}
    </button>
);

export default Button;
