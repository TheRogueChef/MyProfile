import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/ASDemo.mp4';


const ASDemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>Audra Carlson - Stylist Site</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/' className='dashBtn' style={{ color: 'white', textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default ASDemo;