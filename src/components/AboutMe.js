import React from 'react';
import { Image } from 'react-bootstrap';
import ECpic from './images/ECpic.jpg';
import '../components/style.css';
import { Link } from 'react-scroll';


const AboutMe = () => {
    return (
        <div className='AMShell'  >
            <div >
                <Image className='AMpic' src={ECpic} alt='...' />
                <div>
                    <p>Welcome! I'm Erik, an artistic and creative web developer. I enjoyed a long and successful career as a talented Executive Chef. During those years, the plate was my palette; today, it's screens. I always prided myself on creating unique and entertaining dishes while ensuring that the flavors were remarkable and memorable. I bring that same passion to designing one-of-a-kind websites, with images and visuals meant to entice and entertain. Behind the scenes, I implement smart and easy-to-use functionality using my full stack application development skills. I utilize my artistic abilities to craft cool websites that bring friends together, provide valuable resources to users, or represent businesses with upscale yet creatively distinctive functionality.</p>
                    <p>In my spare time, I still love researching new cuisines and experimenting with new and interesting dishes for my family. I am fortunate to have a wonderful group of long-time friends. Spending time with them is always the best – laughing and talking for hours on end. I dedicate a significant amount of time to creating websites, currently following the MERN (MongoDB, Express, React, Node.js) stack. I thrive on dreaming big and then diving in to explore the full potential of what I can create. Gaming is another passion of mine when time permits, along with writing short thoughtful stories and biographical pieces. Perhaps someday, I will write something longer while sitting on a beach, feeling the warm sand between my toes.</p>
                    <p>When I'm working, I thoroughly enjoy creating sites that deviate from the norm in terms of appearance. My primary experience lies in designing full stack JavaScript applications, using a React frontend, an Express backend, and MongoDB as my database. I also received training in Python/Flask and utilized MySQL Workbench for my schemas. I consider myself a quick learner, having been trained in both the Python and JavaScript languages, which has provided me with a solid foundation for tackling new languages. I eagerly anticipate expanding my language repertoire and honing my skills further, all in pursuit of crafting the coolest and most dynamic websites imaginable.</p>
                </div>
            </div>
            <br  />
            <Link to='top' style={{color:'red'}} smooth={true} duration={500}>Back to Top</Link>
            <br  /><br  />
        </div>
    )
}

export default AboutMe;