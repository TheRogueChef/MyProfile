import React from 'react';
import { Link } from 'react-scroll';
import { Image } from 'react-bootstrap';
import python from './images/python.png';
import javascript from './images/javascript.png';
import HTML from './images/HTML.png';
import CSS from './images/CSS.png';
import SQL from './images/SQL.png';
import Express from './images/Express.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import flask from './images/flask.png';
import MongoDB from './images/mongodb.png';
import mysql from './images/mysql.png';
import MySQLWorkbench from './images/MySQLWorkbench.png';
import axios from './images/axios.png';
import Git from './images/Git.png';
import GitHub from './images/github-mark-white.png';
import postman from './images/postman.png';
import bootstrap from './images/bootstrap.png';
import tailwinds from './images/tailwinds.png';
import mongoose from './images/mongoose.png';
import restapi from './images/Rest_API.png';
import ajax from './images/ajax.png';
import JSON from './images/JSON.png';
import balsamiq from './images/balsamiq1.png';
import django from './images/django.png';
import '../components/style.css';




const TechSkills = () => {


    return (
        <div  >
            <h1 style={{ marginTop:'4%',fontFamily: 'SokaRegular', textDecoration: 'underline', color: 'lightGray', textShadow: '4px 4px black' }}>Technical Skills</h1>

            <div className='techShell'>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Languages</h3>
                    <Image className='techLogo' src={python} alt='...'/>- Python
                    <br /><br />                   
                    <Image className='techLogo' src={javascript} alt='...'/>- JavaScript
                    <br /><br />
                    <Image className='techLogo' src={HTML} alt='...'/>- HTML
                    <br /><br />
                    <Image className='techLogo' src={CSS} alt='...'/>- CSS
                    <br /><br />
                    <Image className='techLogo' src={SQL} alt='...'/>- SQL
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Frameworks/Libraries</h3>
                    <Image className='techLogo' src={react} alt='...'/>- REACT
                    <br /><br /> 
                    <Image className='techLogo' src={react} alt='...'/>- REACT Native
                    <br /><br />
                    <Image className='techLogo' src={Express} alt='...'/>- Express (ES6)
                    <br /><br /> 
                    <Image className='techLogo' src={nodejs} alt='...'/>- Node.js
                    <br /><br /> 
                    <Image className='techLogo' src={flask} alt='...'/>- Flask
                    <br /><br /> 
                    <Image className='techLogo' src={bootstrap} alt='...'/>- Bootstrap
                    <br /><br /> 
                    <Image className='techLogo' src={tailwinds} alt='...'/>- Tailwinds
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Databases</h3>
                    <Image className='techLogo' src={MongoDB} alt='...'/>- MongoDB
                    <br /><br /> 
                    <Image className='techLogo' src={mysql} alt='...'/>- MySQL
                    <br /><br /> 
                    <Image className='techLogo' src={mongoose} alt='...'/>- Mongoose
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Tools</h3>
                    <Image className='techLogo' src={axios} alt='...'/>- Axios
                    <br /><br />
                    <Image className='techLogo' src={postman} alt='...'/>- Postman
                    <br /> <br />
                    <Image className='techLogo' src={restapi} alt='...'/>- REST API
                    <br /> <br />
                    <Image className='techLogo' src={JSON} alt='...'/>- JSON
                    <br /> <br />
                    <Image className='techLogo' src={MySQLWorkbench} alt='...'/>- My SQL Workbench
                    <br /><br />
                    <Image className='techLogo' src={Git} alt='...'/>- Git
                    <br /><br />
                    <Image className='techLogo' src={GitHub} alt='...'/>- GitHub
                    <br /><br />
                    <Image className='techLogo' src={balsamiq} alt='...'/>- Balsamiq
                    <br /><br />
                    <Image className='techLogo' src={ajax} alt='...'/>- AJAX
                    <br /> <br />
                    <Image className='techLogo' src={django} alt='...'/>- Django 2.2
                </div>

            </div>
            <div style={{ marginBottom: '4%'}}>
                <Link style={{ fontFamily: 'SokaThin' }} to='top' className="dashBtn" smooth={true} duration={500}>Back to Top</Link>
            </div>
        </div>
    )
}

export default TechSkills;