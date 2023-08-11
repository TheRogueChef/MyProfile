import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Image } from 'react-bootstrap';
import KSLogo from './images/KSLogo.PNG';
import MTT from './images/MTT_Logo.PNG'; 
import NewProduct from './images/NewProduct.PNG';
import '../components/style.css';


const Projects = () => {
    return (
        <div className='pShell'>
            <h1 className='CTitles'>Projects</h1>
            <br />
            <div className='pBox'>
                    <Image className='plogo' src={MTT} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>My Tribe Tracker (In Progress)</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='http://github.com/TheRogueChef/My_Tribe_Tracker'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/MTTDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT, Express, Mongoose, Node.js</li>
                    <li>-Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <p>Mt Tribe Tracker was a site designed for friends to gather. It offers an events page, a tribe diary, an ongiong chat, an embedded Spotify player with tribe playlist, a famlilies page, a photo gallery with tribe added photos and finally a random API call function. When finished it will have some settings (day/night) and be fully responsive on all devices. Stay tuned...</p>
            <br /><br /><br />
            <div className='pBox'>
                    <Image className='plogo' src={KSLogo} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Kitchen Sync</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='http://github.com/TheRogueChef/Kitchen_Sync'>GitHub Link</RouterLink>
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
            <p>Kitchen Sync was designed to be a home cooks recipe library, allowing them to create their own or alter an already existing recipe. It makes API calls both for a randomly generated recipe or a search for recipes to use a sepcified item. It offers a login and registration function with full CRUD functionality.</p>
            <br/><br/><br/>
            <div className='pBox'>
                    <Image className='plogo'  src={NewProduct} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Product Manager</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to={'http://github.com/TheRogueChef/MERN_March/tree/main/week6/Product_Manager'}>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/PMDemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>-Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <p>Product Manager was one of the first projects using a backend server (Express(Node.js)) with the React frontend. This was the introduction to MongoDB as a database for product information. This project simply displays the CRUD functionality, in that you can create a new project, update a project, display a project (singularly and in a group) and finally delete a product. I utilized react-bootstrap for some of the CSS styling.</p>
            <br />
            <ScrollLink to='top' style={{color:'red'}} smooth={true} duration={500}>Back to Top</ScrollLink>
            <br /><br />
        </div >
    )
}

export default Projects;
