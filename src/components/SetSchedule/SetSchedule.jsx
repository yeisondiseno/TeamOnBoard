import React from 'react';
import './SetSchedule.scss';

const SetSchedule = ( { icon, textIcon, img, title, info, color } ) => (
    <div className="SetSchedule">
        <button className={`SetSchedule__btn ${color}`}>
            <span>
                {icon}
            </span>
            <p>
                {textIcon}
            </p>
        </button>
        <img src={img} alt=""/>
        <div className="SetSchedule__info">
            <span className="SetSchedule__info--tilte">
                {title}
            </span>
            <p>
                {info}
            </p>
        </div>
    </div>
);

export default SetSchedule;