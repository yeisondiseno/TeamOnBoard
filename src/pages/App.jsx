import React from 'react';
import './App.scss';

// imágenes y recursos
import LogoImg from '../assets/img/Logo-complete.svg';

//componentes
import Button from '../components/Button/Button';

function App() {

  // iconos en código para ser modificados
  let iconCalendar = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(-2.5 -2.5)"><rect width="13.5" height="13.5" rx="3" transform="translate(3.25 3.25)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="13.5" transform="translate(3.25 7)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.975,8.625a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,8.587a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,8.625a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,8.587a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,8.625a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,8.587a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.1,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.062,10.837a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,10.837a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,10.837a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.975,10.875a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,10.837a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.975,13.125a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,13.087a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,13.087a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,13.087a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.1,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.062,13.087a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>
  let iconFile = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13.5" viewBox="0 0 15 13.5"><path d="M14.25,5.2H9.4a.75.75,0,0,1-.62-.328L7.723,3.328A.75.75,0,0,0,7.1,3H3.75a1.5,1.5,0,0,0-1.5,1.5v9A1.5,1.5,0,0,0,3.75,15h10.5a1.5,1.5,0,0,0,1.5-1.5V6.7A1.5,1.5,0,0,0,14.25,5.2Z" transform="translate(-1.5 -2.25)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></svg>;
  let iconProfile = <svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="13.688" viewBox="0 0 11.907 13.688"><g transform="translate(0.741 0.947)"><path d="M0,12H0A3.281,3.281,0,0,1,3.3,8.7H7.125a3.281,3.281,0,0,1,3.3,3.3h0" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.482" fill-rule="evenodd"/><path d="M7.5.9a3.125,3.125,0,0,1,0,4.5A3.182,3.182,0,0,1,3,.9,3.263,3.263,0,0,1,7.5.9" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>;


  return (
    <div className="App">
      <div className="head">
        <div className="logo">
          <img src={LogoImg} alt="TeamOnBoard logo"/>
        </div>
        <div className="menu">
          <menu>
            <Button title="PTO" clase="active" icon={iconCalendar} />
            <Button title="Files" clase="mrl1" icon={iconFile} />
            <Button title="Profile" icon={iconProfile} />
          </menu>
        </div>
        <div className="user">
          user
        </div>
      </div>
      <div className="left">
        <div className="calendar">
          calendar
        </div>
        <div className="schedule">
          schedule
        </div>
      </div>
      <div className="content">
        content
      </div>
    </div>
  );
}

export default App;
