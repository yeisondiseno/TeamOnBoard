import React from 'react';
import './App.scss';

// imágenes y recursos
import LogoImg from '../assets/img/Logo-complete.svg';
import Img1 from '../assets/img/Big.png';
import Img2 from '../assets/img/img2.png';
import Img3 from '../assets/img/img3.png';
import Img4 from '../assets/img/img4.png';
import Img5 from '../assets/img/img5.png';
import Img6 from '../assets/img/img6.png';
import Img7 from '../assets/img/img7.png';

//componentes
import Button from '../components/Button/Button';
import User from '../components/User/User';
import Calendar from  '../components/Calendar/Calendar';
import SetSchedule from '../components/SetSchedule/SetSchedule';
import UserContent from '../components/UserContent/UserContent';

function App() {

  // iconos en código para ser modificados
  let iconCalendar = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(-2.5 -2.5)"><rect width="13.5" height="13.5" rx="3" transform="translate(3.25 3.25)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><line x1="13.5" transform="translate(3.25 7)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.975,8.625a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,8.587a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,8.625a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,8.587a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,8.625a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,8.587a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.1,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.062,10.837a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,10.837a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,10.875a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,10.837a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.975,10.875a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,10.837a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.975,13.125a.038.038,0,1,1-.038-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M12.938,13.087a.038.038,0,0,1,.038.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.349,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M10.312,13.087a.037.037,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.724,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M7.687,13.087a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.1,13.125a.037.037,0,1,1-.037-.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M5.062,13.087a.038.038,0,0,1,.037.038" transform="translate(1 1)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>
  let iconFile = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13.5" viewBox="0 0 15 13.5"><path d="M14.25,5.2H9.4a.75.75,0,0,1-.62-.328L7.723,3.328A.75.75,0,0,0,7.1,3H3.75a1.5,1.5,0,0,0-1.5,1.5v9A1.5,1.5,0,0,0,3.75,15h10.5a1.5,1.5,0,0,0,1.5-1.5V6.7A1.5,1.5,0,0,0,14.25,5.2Z" transform="translate(-1.5 -2.25)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></svg>;
  let iconProfile = <svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="13.688" viewBox="0 0 11.907 13.688"><g transform="translate(0.741 0.947)"><path d="M0,12H0A3.281,3.281,0,0,1,3.3,8.7H7.125a3.281,3.281,0,0,1,3.3,3.3h0" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.482" fill-rule="evenodd"/><path d="M7.5.9a3.125,3.125,0,0,1,0,4.5A3.182,3.182,0,0,1,3,.9,3.263,3.263,0,0,1,7.5.9" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>;
  let iconPTO = <svg xmlns="http://www.w3.org/2000/svg" width="15.375" height="15.375" viewBox="0 0 15.375 15.375"><g transform="translate(1735.313 340.313)"><line x1="13.5" transform="translate(-1734.75 -336)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125"/><path d="M13.125,9.75h0A3.375,3.375,0,1,1,9.75,13.125h0A3.375,3.375,0,0,1,13.125,9.75h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M11,15.75H4.5A2.25,2.25,0,0,1,2.25,13.5h0v-9h0A2.25,2.25,0,0,1,4.5,2.25h9A2.25,2.25,0,0,1,15.75,4.5V11" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M13.045,11.987v1.318l1.036.632" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M10.312,8.587h0a.037.037,0,1,0,.037.037h0a.037.037,0,0,0-.037-.037" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M7.687,8.587h0a.036.036,0,0,0-.036.036h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M5.062,8.587h0a.036.036,0,0,0-.037.035s0,0,0,0h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M7.687,10.837h0a.036.036,0,0,0-.036.036h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M5.062,10.837h0a.036.036,0,0,0-.037.035s0,0,0,0h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M7.687,13.088h0a.036.036,0,0,0-.036.036h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/><path d="M5.062,13.088h0a.036.036,0,0,0-.037.035s0,0,0,0h0a.037.037,0,1,0,.037-.037h0" transform="translate(-1737 -342)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" fill-rule="evenodd"/></g></svg>;
  let iconCake = <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="15.75" viewBox="0 0 13.5 15.75"><g transform="translate(1236.75 -755.75)"><path d="M9,6.747A2.046,2.046,0,0,1,6.951,4.7" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M6.95,4.7c0-.893.407-1.536,1.227-1.536" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M9,6.747A2.047,2.047,0,0,0,11.053,4.7" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M11.052,4.7c0-.893-.413-1.536-1.234-1.536" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M9.818,3.164A6.069,6.069,0,0,0,9,3.3a5.9,5.9,0,0,0-.821-.131" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M9,3.294V2.55A1.05,1.05,0,0,1,10.05,1.5" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M6.956,4.779C4.651,5.418,3,7.1,3,9.085v.052a2.08,2.08,0,0,0,1.6,2.075,1.98,1.98,0,0,0,1.854-.6.745.745,0,0,1,1.1.019,1.974,1.974,0,0,0,2.879,0,.745.745,0,0,1,1.1-.019,1.98,1.98,0,0,0,1.854.6A2.078,2.078,0,0,0,15,9.137V9.085C15,7.1,13.35,5.419,11.045,4.78" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M13.391,11.212l-.5,3.265A1.5,1.5,0,0,1,11.41,15.75H6.589a1.5,1.5,0,0,1-1.483-1.274l-.5-3.265" transform="translate(-1239 755)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>;
  let iconFlag = <svg xmlns="http://www.w3.org/2000/svg" width="14.431" height="15.199" viewBox="0 0 14.431 15.199"><g transform="translate(-66.069 -872.5)"><path d="M7.5,9.75l.408,1.224A1.5,1.5,0,0,0,9.332,12H14.25a1.5,1.5,0,0,0,1.5-1.5V6.116a1.5,1.5,0,0,0-1.5-1.5h-3.7" transform="translate(64 871)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/><path d="M6.75,15.75,2.908,4.224A1.5,1.5,0,0,1,4.331,2.25h4.72a1.5,1.5,0,0,1,1.5,1.5v4.5a1.5,1.5,0,0,1-1.5,1.5H4.75" transform="translate(64 871)" fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/></g></svg>;


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
          <User />
      </div>
      <div className="left">
        <Calendar />
        <div className="schedule scroll">
          <h2>
            10/09 - Friday 
          </h2>
          <SetSchedule 
            title="Sudanka Bakalowits" 
            info="10/09/2019 to 10/20/2020"
            img={Img1}
            textIcon="PTO"
            icon={iconPTO}
            color="red"
          />
          <SetSchedule 
            title="Dai Jiang" 
            info="10/09/2019 to 10/25/2020"
            img={Img2}
            textIcon="PTO"
            icon={iconPTO}
            color="red"
          />
          <SetSchedule 
            title="Richardo Kann" 
            info="10/09/2019 to 10/12/2020"
            img={Img3}
            textIcon="PTO"
            icon={iconPTO}
            color="red"
          />
          <SetSchedule 
            title="Hangakore Hariwana" 
            info="10/09"
            img={Img4}
            textIcon="BDAY"
            icon={iconCake}
            color="blue"
          />
          <SetSchedule 
            title="Deveeprasad Acharya" 
            info="10/09"
            img={Img5}
            textIcon="BDAY"
            icon={iconCake}
            color="blue"
          />
          <SetSchedule 
            title="Miriam Jesus" 
            info="3 Years"
            img={Img6}
            textIcon="YEAR"
            icon={iconFlag}
            color="violet"
          />
          <h2>
            10/10 Friday
          </h2>
          <SetSchedule 
            title="Jarrett Cawsey" 
            info="3 Years"
            img={Img7}
            textIcon="YEAR"
            icon={iconFlag}
            color="violet"
          />
        </div>
      </div>
      <div className="content">
        <UserContent />
      </div>
    </div>
  );
}

export default App;
