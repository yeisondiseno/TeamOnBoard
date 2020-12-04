import React from 'react';
import './Calendar.scss';

const Calendar = () => (
    <div className="calendar__section">
        <div className="calendar__head">
            <h2>
                November 2020
            </h2>
            <div className="calendar__head--right">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
                <span className="bullet">
                    Today
                </span>
            </div>
        </div>
        <div className="calendar__body">
            <table>
                <thead>
                    <tr>
                        <th>
                            sun
                        </th>
                        <th>
                            mon
                        </th>
                        <th>
                            tue
                        </th>
                        <th>
                            wed
                        </th>
                        <th>
                            thu
                        </th>
                        <th>
                            fri
                        </th>
                        <th>
                            sat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-back table-back--top" >
                            <span className="disable">
                                28
                            </span>
                        </td>
                        <td >
                            <span className="disable">
                                29
                            </span>
                        </td>
                        <td>
                            <span className="disable">
                                30
                            </span>
                        </td>
                        <td>
                            <span>
                                1
                            </span>
                        </td>
                        <td>
                            <span>
                                2
                            </span>
                        </td>
                        <td>
                            <span>
                                3
                            </span>
                        </td>
                        <td className="table-back table-back--top" >
                            <span>
                                4
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-back" >
                            <span >
                                5
                            </span>
                        </td>
                        <td >
                            <span >
                                6
                            </span>
                        </td>
                        <td>
                            <span >
                                7
                            </span>
                        </td>
                        <td>
                            <span>
                                8
                            </span>
                        </td>
                        <td>
                            <span className="active">
                                9
                            </span>
                            <div className="decorate">

                            </div>
                        </td>
                        <td>
                            <span>
                               10
                            </span>
                        </td>
                        <td className="table-back" >
                            <span>
                               11
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-back" >
                            <span >
                                12
                            </span>
                        </td>
                        <td >
                            <span >
                                13
                            </span>
                        </td>
                        <td>
                            <span >
                                14
                            </span>
                        </td>
                        <td>
                            <span>
                                15
                            </span>
                        </td>
                        <td>
                            <span>
                                16
                            </span>
                        </td>
                        <td>
                            <span>
                                17
                            </span>
                        </td>
                        <td className="table-back" >
                            <span>
                                18
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-back" >
                            <span >
                                19
                            </span>
                        </td>
                        <td >
                            <span >
                                20
                            </span>
                        </td>
                        <td>
                            <span >
                                21
                            </span>
                        </td>
                        <td>
                            <span>
                                22
                            </span>
                        </td>
                        <td>
                            <span>
                                23
                            </span>
                        </td>
                        <td>
                            <span>
                                24
                            </span>
                        </td>
                        <td className="table-back" >
                            <span>
                                25
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-back" >
                            <span >
                                26
                            </span>
                        </td>
                        <td >
                            <span >
                                27
                            </span>
                        </td>
                        <td>
                            <span >
                                28
                            </span>
                        </td>
                        <td>
                            <span>
                                30
                            </span>
                        </td>
                        <td>
                            <span>
                                31
                            </span>
                        </td>
                        <td>
                            <span className="disable">
                                1
                            </span>
                        </td>
                        <td className="table-back" >
                            <span className="disable">
                                2
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-back table-back--bottom" >
                            <span className="disable">
                                3
                            </span>
                        </td>
                        <td >
                            <span className="disable">
                                4
                            </span>
                        </td>
                        <td>
                            <span className="disable">
                                5
                            </span>
                        </td>
                        <td>
                            <span className="disable">
                                6
                            </span>
                        </td>
                        <td>
                            <span className="disable">
                                7
                            </span>
                        </td>
                        <td>
                            <span className="disable"> 
                                8
                            </span>
                        </td>
                        <td className="table-back table-back--bottom" >
                            <span className="disable">
                                9
                            </span>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
);

export default Calendar;