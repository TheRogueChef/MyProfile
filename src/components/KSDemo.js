import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/KSDemo.mp4';

const KSDemo = () => {
    return (
        <div className='KSBox'>
            <br /> 
            <h1>Kitchen Sync</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/' className='dashBtn' style={{ textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default KSDemo;


