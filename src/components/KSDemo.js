import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/Kitchen_Sync_Demo(v.2).mp4';


const KSDemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>Kitchen Sync</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/'  style={{ color: 'silver', textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default KSDemo;


