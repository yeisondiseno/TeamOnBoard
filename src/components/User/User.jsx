import React from 'react';
import './User.scss';

import imgUser from '../../assets/img/profile.jpg'

const User = () => (

    <div className="user-cont">
        <img src={imgUser} alt="User"/>
        <span>
            Jhon Stiven
        </span>
    </div>
); 

export default User;