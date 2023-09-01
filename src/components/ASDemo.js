import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/AudraSiteDemo.mp4';

const ASDemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>Audra Carlson - Stylist Site</h1>
            <video style={{ height: '60%', border: '2px solid silver' }} controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br /> <br /> 
            <Link to='/' className='dashBtn' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </div>
    );
}

export default ASDemo;
