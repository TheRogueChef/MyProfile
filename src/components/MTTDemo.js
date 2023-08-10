import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/Tribe_Preview.mp4';


const MTTDemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>My Tribe Tracker</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/'  style={{ color: 'silver', textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default MTTDemo;