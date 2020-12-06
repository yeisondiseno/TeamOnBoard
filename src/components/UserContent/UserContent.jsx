import React from 'react';
import './UserContent.scss';

// imágenes 
import img from '../../assets/img/profile.jpg';

//componentes
import Button from '../Button/Button';

const UserContent = () => (

    <div className="UserContent">
        <div className="UserContent__head">
            <img src={img} alt="Profile"/>
            <div className="UserContent__head__info">
                <h1>
                    Jhon Steven
                </h1>
                <p>
                    Designer | Fulltime
                </p>
                <p>
                    Salary: $1.650
                </p>
                <p>
                    Start Date: 11/01/2018 - 26 Months
                </p>
            </div>
            <div className="UserContent__head__shared">
                <Button clase="secondary mr05" iconL="fa-google" title="GSuite" />
                <Button clase="secondary mr05" iconL="fa-github" title="GitHub" />
                <Button clase="secondary mr05" iconL="fa-aws" title="AWS" />
                <Button clase="secondary mr05" iconL="fa-invision" title="Invision" />
            </div>
        </div>
        <div className="UserContent__cont">
            <p>
                Click on any field below to edit:
            </p>
            <section>
                <h2>
                    Personal:
                </h2>
                <table>
                    <tr>
                        <td className="field">
                            ID (National ID of Tax ID):
                        </td>
                        <td>
                            0000000
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Address:
                        </td>
                        <td>
                            Calle 32 # 1
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Address Line 2:
                        </td>
                        <td>
                            Calle 32 # 1
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            City:
                        </td>
                        <td>
                            Bogota
                            <i class="fas fa-angle-down"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Country:
                        </td>
                        <td>
                            Colombia
                            <i class="fas fa-angle-down"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Zip/Postal Code:
                        </td>
                        <td>
                            250001
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Nationality:
                        </td>
                        <td>
                            Colombiano
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Birthday:
                        </td>
                        <td>
                            MM/DD/YYYY
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            T-Shit size:
                        </td>
                        <td>
                            M
                            <i class="fas fa-angle-down"></i>
                        </td>
                    </tr>
                </table>
            </section>

        </div>
        <hr/>
        <div className="UserContent__cont">
            <section>
                <h2>
                    Contact:
                </h2>
                <table>
                    <tr>
                        <td className="field">
                            Email Company:
                        </td>
                        <td>
                            email@hellobuild.com
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Personal Email:
                        </td>
                        <td>
                            perosnal@email.com
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Phone:
                        </td>
                        <td>
                            +57 000 000 00 00 
                        </td>
                    </tr>
                </table>
            </section>
        </div>
        <hr/>
        <div className="UserContent__cont">
            <section>
                <h2>
                    Banking:
                </h2>
                <table>
                    <tr>
                        <td className="field">
                            Bank:
                        </td>
                        <td>
                            Bancolombia
                        </td>
                    </tr>
                    <tr>
                        <td className="field">
                            Bank Account Number:
                        </td>
                        <td>
                            00000000000
                        </td>
                    </tr>
                </table>
            </section>
        </div>

    </div>
);

export default UserContent;

