import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/PMDemo.mp4';

const PMDemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>Product Manager</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/' className='dashBtn' style={{ color: 'silver', textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default PMDemo;