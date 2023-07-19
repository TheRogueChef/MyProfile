import React from 'react';
import { Image } from 'react-bootstrap';
import ECpic from './images/ECpic.jpg';
import '../components/style.css';
import { Link } from 'react-scroll';


const AboutMe = () => {
    return (
        <div className='AMShell'  >
            <div >
                <Image className='AMpic' src={ECpic} alt='...' style={{ boxShadow: '.25rem .25rem black'}}/>
                <div>
                    <p style={{ marginTop: '1rem' }}>Driven junior web developer and software designer who has successfully navigated a long and prosperous career as an artistic talented Executive Chef, company leader and team motivator successful at maintaining staff focus and productivity in high-volume, fast-paced operations. Now I utilize those artistic skills in designing cool web sites that bring friends together, offer a cool resource to the user or represent a business in an upscale, but still unique and detailed in functionality.</p>
                    <p>In my off time I still love researching new cuisines and trying out new and interesting dishes on my family. I am most fortunate to have a really great group of long time friends. Time spent with them is always best, laughing and talking for hours on end. I spend a lot of my time on creating websites, currently in the MERN(MongoDB, Express, React, Node.js) fashion. I really like to dream big then dig in to what else can I make it do. I do love gaming when I can, and writing short pieces along with the one day longer piece.
                    </p>
                    <p>I really enjoy creating full stack applications using React with and Express backend and using MongoDB as my database. I am a pretty quick study so by learning both Python and JavaScript I feel I have a good grasp on HOW to learn a new language. I look forward to learning more languages and honing my skills to be able to make the coolest and most dynamic web sites possible.</p>
                </div>
            </div>
            <br  />
            <Link to='top' style={{color:'red'}} smooth={true} duration={500}>Back to Top</Link>
            <br  /><br  />
        </div>
    )
}

export default AboutMe;