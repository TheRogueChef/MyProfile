import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/AADemo.mp4';


const AADemo = () => {
    return (
        <div className='DemoBox'>
            <br /> 
            <h1>Author, Author</h1>
            <video  style={{ height: '60%', border: '2% solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/'  style={{ color: 'silver',textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default AADemo;
