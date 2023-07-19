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
            <h1 style={{fontFamily: 'SokaRegular', textDecoration: 'underline', color: 'silver', textShadow: '.2rem .2rem black' }}>Tech Skills</h1>
            <div className='techShell'>
                <div className='techBox'>
                    <p style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Languages</p>
                    <Image className='techLogo' src={python} alt='...'/>- Python
                    <br /><br />                   
                    <Image className='techLogo' src={javascript} alt='...'/>- JavaScript
                    <br /><br />
                    <Image className='techLogo' src={HTML} alt='...'/>- HTML
                    <br /><br />
                    <Image className='techLogo' src={CSS} alt='...'/>- CSS
                    <br /><br />
                    <Image className='techLogo' src={SQL} alt='...'/>- SQL
                    <br /> <br />
                </div>
                <div className='techBox'>
                    <p style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Frameworks</p>
                    <p style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Libraries</p>
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
                    <br /> <br />
                </div>
                <div className='techBox'>
                    <p style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Databases</p>
                    <Image className='techLogo' src={MongoDB} alt='...'/>- MongoDB
                    <br /><br /> 
                    <Image className='techLogo' src={mysql} alt='...'/>- MySQL
                    <br /><br /> 
                    <Image className='techLogo' src={mongoose} alt='...'/>- Mongoose
                    <br /> <br />
                </div>
                <div className='techBox'>
                    <p style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Tools</p>
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
                    <br /> <br />
                </div>
            </div>
            <div>
                <Link style={{  fontSize: '.75rem',color: 'red', fontFamily: 'SokaThin' }} to='top'  smooth={true} duration={500}>Back to Top</Link>
                <br /><br />
            </div>
        </div>
    )
}

export default TechSkills;