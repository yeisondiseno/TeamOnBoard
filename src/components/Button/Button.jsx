import React from 'react';
import './Button.scss';

const Button = ({ title, icon, iconL, clase }) => (
    <button className={`btn ${clase}`}>
        { icon ? 
            <span>
                {icon}
            </span>
            :
            ''
        }
        { iconL ?
            <i class={`fab ${iconL} icon-left`}></i> : ''
        }
        {title}
    </button>
);

export default Button;
