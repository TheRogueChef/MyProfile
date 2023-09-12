import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import KSLogo from './images/KSLogo.jpg';
import MTT from './images/MTT_Logo.jpg'; 
import Ers from './images/Mythosaur.jpg';
import ACLogo from './images/ACLogo.jpg';
import '../components/style.css';


const Projects = () => {
    return (
        <div className='pShell'>
            <h1 className='CTitles'>Projects</h1>
            <br />
            <div className='pBox'>
                    <Image className='plogo' src={Ers} alt='....' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Ers Q'Orr, Bounty Hunter</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} target= 'blank' to='http://github.com/TheRogueChef/Ers_Q-Orr'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/ErsDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT (Node.js)</li>
                    <li>-Tools used: scroll, scripts, Bootstrap</li>
                </ul>
            </div>
            <p>During the pandemic I created my own Mandalorian Bounty Hunter named Ers Q'Orr along with his suit of armor and his weapons. Now, he needs to advertise his services to the universe. I tried to design this profile as seperate components, as opposed to one main page. I played with stylings and continue to refine my skills. And, if you ever need any inter-galactic services, please feel free to check out Ers' services pages.</p>
            <br /><br /><br />
            <div className='pBox'>
                    <Image className='plogo' src={MTT} alt='....' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>My Tribe Tracker</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} target= 'blank' to='http://github.com/TheRogueChef/My_Tribe_Tracker'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/MTTDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT, Express, Mongoose, Node.js</li>
                    <li>-Tools used: scroll, scripts, Bootstrap, Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <p>My Tribe Tracker was a site designed for friends to gather. It offers an events page, a tribe diary, an ongoing chat, an embedded Spotify player with tribe playlist, a families page and finally a random API call function.</p>
            <br /><br /><br />
            <div className='pBox'>
                    <Image className='plogo' src={ACLogo} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Personal Website - Hair Stylist</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} target= 'blank' to='http://github.com/TheRogueChef/audraprofile'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/ASDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT (Node.js)</li>
                    <li>-Tools used: scroll, scripts, Bootstrap, Wrangler</li>
                </ul>
            </div>
            <p>This site was my first foray into a slightly more professional look for my work. It was exciting to create an elegant and fully functional website. The site features an embedded Google Map with directions to the salon, a Calendly feature allowing clients to set up their own appointments. I also included links to the salon where the stylist works, as well as a link to her Instagram portfolio. The site is responsive and looks great, functioning well on all screen sizes. The full menu condenses into a drop-down menu on smaller screens, providing a much cleaner look.</p>
            <br /><br /><br />
            <div className='pBox'>
                    <Image className='plogo' src={KSLogo} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Kitchen Sync</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} target= 'blank' to='http://github.com/TheRogueChef/Kitchen_Sync'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/KSDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <br />
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>-Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <p>Kitchen Sync was designed to be a home cooks recipe library, allowing them to create their own or alter an already existing recipe. It makes API calls both for a randomly generated recipe or a search for recipes to use a specified item. It offers a login and registration function with full CRUD functionality.</p>  
            <br /><br />
        </div >
    )
}

export default Projects;
