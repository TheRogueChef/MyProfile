import React from 'react';
import { Link } from 'react-scroll';
import { Image } from 'react-bootstrap';
import CDLogo from './images/CDLogo.png';
import SSCC from './images/SSCCLogo.jpg';
import '../components/style.css';


const Education = () => {
    return (
        <div className='edShell'>
            <br  /><br  />
            <h1 style={{ fontFamily: 'SokaRegular', textDecoration:'underline', textShadow: '.2rem .2rem black'}}>Education</h1>
            <br  /><br  />
            <div>
                <Image className='edlogo' src={CDLogo} alt='...' />
                <h2>Coding Dojo</h2>
                <h3>Certification (Python, JavaScript(MERN))</h3>
                <ul>
                    <li>- Attended a rigorous 6-month coding boot camp with numerous bonus workshops and seminars</li>
                    <li>- 8 weeks on full stack app creation in Python utilizing a Flask backend and using MySql workbench for my database creation and storage</li>
                    <li>- 8 weeks on full stack app creation in JavaScript(React) utilizing an Express/Mongoose backend and using MongoDB for my database creation and storage</li>
                </ul>
            </div>
            <br  /><br  /><br  />
            <div>
                <Image className='edlogo' src={SSCC} alt='...' />
                <h2>South Seattle College | Seattle, WA</h2>
                <h3>Associates Degree in Culinary Arts</h3>
                <ul>
                    <li>- Studied classical French cuisine with a focus on technique and execution</li>
                    <li>- Attended additional 'Sous Chef' quarter to achieve Associates degree. Area of focus on commercial kitchen management and relevant kitchen document generation and recipe writing</li>
                    <li>- Maintained a 3.8 gpa and spent many extracurricular hours working intimately with invited guest chefs, as well as, staff chefs learning trick and trade secrets</li>
                </ul>
            </div>
            <br  />
            <div>
            <Link to='top' style={{color:'red'}} smooth={true} duration={500}>Back to Top</Link>
            <br  /><br  />
            </div>
        </div >
    )
}

export default Education;