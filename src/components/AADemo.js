import React from 'react';
import { Link } from 'react-router-dom';
import video from './videos/AADemo.mp4';

const AADemo = () => {
    return (
        <div className='KSBox'>
            <br /> 
            <h1>Author, Author</h1>
            <video  style={{ height: '60%', border: '2px solid silver'}} src={video} controls/>
            <br /> <br /> 
            <Link to='/' className='dashBtn' style={{ textDecoration: 'none'}}>Home</Link>
        </div>
    )}

export default AADemo;
