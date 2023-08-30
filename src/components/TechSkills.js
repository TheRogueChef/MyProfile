import React from 'react';
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
            <div className='techShell'>
            <h1 style={{  textDecoration: 'underline' }}>Tech Skills</h1>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular' }}>Languages</h3>
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={python} alt='...'/>
                            <p>Python</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={javascript} alt='...'/>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={HTML} alt='...'/>
                            <p>HTML</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={CSS} alt='...'/>
                            <p>CSS</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={SQL} alt='...'/>
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
                <div className='techBox'>
                    <h3 style={{  fontFamily: 'SokaRegular' }}>Frameworks/Libraries</h3>
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={react} alt='...'/>
                            <p>REACT</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={react} alt='...'/>
                            <p>REACT Native</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={Express} alt='...'/>
                            <p>Express(ES6)</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={nodejs} alt='...'/>
                            <p>Node.js</p>
                        </div>
                    </div>
                        <br />
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={flask} alt='...'/>
                            <p>Flask</p>
                        </div>
                        <div> 
                            <Image className='techLogo' src={bootstrap} alt='...'/>
                            <p>Bootstrap</p>
                        </div>
                        <div> 
                            <Image className='techLogo' src={tailwinds} alt='...'/>
                            <p>Tailwinds</p>
                        </div>
                    </div>
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular' }}>Databases</h3>
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={MongoDB} alt='...'/>
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={mysql} alt='...'/>
                            <p>MySQL</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={mongoose} alt='...'/>
                            <p>Mongoose</p>
                        </div>
                    </div>
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular' }}>Tools</h3>
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={axios} alt='...'/>
                            <p>Axios</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={postman} alt='...'/>
                            <p>Postman</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={restapi} alt='...'/>
                            <p>REST API</p>
                        </div>
                        
                        <div>
                            <Image className='techLogo' src={JSON} alt='...'/>
                            <p>JSON</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={MySQLWorkbench} alt='...'/>
                            <p>My SQL Workbench</p>
                        </div>
                    </div>
                        <br />
                    <div className='techGuts'>
                        <div>
                            <Image className='techLogo' src={Git} alt='...'/>
                            <p>Git</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={GitHub} alt='...'/>
                            <p>GitHub</p>
                        </div>
                        
                        <div>
                            <Image className='techLogo' src={balsamiq} alt='...'/>
                            <p>Balsamiq</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={ajax} alt='...'/>
                            <p>AJAX</p>
                        </div>
                        <div>
                            <Image className='techLogo' src={django} alt='...'/>
                            <p>Django 2.2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkills;