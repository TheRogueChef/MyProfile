import React from 'react';
import { Image } from 'react-bootstrap';
import CDLogo from './images/CDLogo.png';
import SSCC from './images/SSCCLogo.jpg';
import '../components/style.css';


const Education = () => {
    return (
        <div className='edShell'>
            <br  /><br  />
            <h1 className='CTitles'>Education</h1>
            <br  /><br  />
            <div>
                <Image className='edlogo' src={CDLogo} alt='...' />
                <h3>Coding Dojo</h3>
                <h4>Certification (Python, JavaScript(MERN))</h4>
                <ul>
                    <li>-Attended a rigorous 6-month coding boot camp with numerous bonus workshops and seminars</li>
                    <li>-8 weeks on full stack app creation in Python utilizing a Flask backend and using MySql workbench for my database creation and storage</li>
                    <li>-8 weeks on full stack app creation in JavaScript(React) utilizing an Express/Mongoose backend and using MongoDB for my database creation and storage</li>
                </ul>
            </div>
            <br  /><br  /><br  />
            <div>
                <Image className='edlogo' src={SSCC} alt='...' />
                <h3>South Seattle College | Seattle, WA</h3>
                <h4>Associates Degree in Culinary Arts</h4>
                <ul>
                    <li>-Studied classical French cuisine with a focus on technique and execution</li>
                    <li>-Attended additional 'Sous Chef' quarter to achieve Associates degree. Area of focus on commercial kitchen management and relevant kitchen document generation and recipe writing</li>
                    <li>-Maintained a 3.8 gpa and spent many extracurricular hours working intimately with invited guest chefs, as well as, staff chefs learning trick and trade secrets</li>
                </ul>
            </div>
            <br  />
        </div >
    )
}

export default Education;