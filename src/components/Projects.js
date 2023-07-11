import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Image } from 'react-bootstrap';
import KitSyncLogo from './images/KitSyncLogo.PNG';
import Author from './images/Author.jpg'; 

import NewProduct from './images/NewProduct.PNG';
import '../components/style.css';

const Projects = () => {
    return (
        <div className='pShell'>
            <h1 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline', textShadow: '4% 4% black'}}>Projects</h1>
            <br /><br /><br />
            <div className='pBox'>
                
                    <Image className='plogo' src={KitSyncLogo} alt='...' />
                    <h1>Kitchen Sync</h1>
        

                <hr/>
                <RouterLink style={{ color:'white', marginTop: '35px'}} to='http://github.com/TheRogueChef/Kitchen_Sync'>GitHub Link</RouterLink>
                <hr/>
                <RouterLink style={{ color:'white', marginTop: '35px'}} to='/KSDemo'>Demo</RouterLink>
                <hr/>
                <ul>
                    
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <h5>Kitchen Sync was designed to be a home cooks recipe library, allowing them to create their own or alter an already existing recipe. It makes API calls both for a randomly generated recipe or a search for recipes to use a sepcified item. It offers a login and registration function with full CRUD functionality.</h5>
            <br /><br /><br />
            <div className='pBox'>
                <Image className='plogo' src={Author} alt='...' />
                <h1>Author, Author</h1>
                <hr/>
                <RouterLink style={{ marginTop: '35px', color: 'white'}} to='http://github.com/TheRogueChef/Authors'>GitHub Link</RouterLink>
                <hr/>
                <RouterLink style={{ color:'white', marginTop: '35px'}} to='/AADemo'>Demo</RouterLink>
                <hr/>
                <ul>
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <h5>Author, Author was a project where I was learning how to use the CRUD functions and the app itself is simply an authors name file with the ability to create a new author, edit an author, display and author (singularly and in a group) and finally delete an author. I was also learning more about CSS and how to format a webpage.</h5>
            <br /><br /><br />
            <div className='pBox'>
                <Image className='plogo'  src={NewProduct} alt='...' />
                <h1>Product Manager</h1>
                <hr/>
                <RouterLink style={{ color:'white',    marginTop: '35px'}} to={'http://github.com/TheRogueChef/MERN_March/tree/main/week6/Product_Manager'}>GitHub Link</RouterLink>
                <hr/>
                <RouterLink style={{ color:'white', marginTop: '35px'}} to='/PMDemo'>Demo</RouterLink>
                <hr/>
                <ul>
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <h5>Product Manager was one of the first projects using a backend server (Express(Node.js)) with the React frontend. This was the introduction to MongoDB as a database for product information. This project simply displays the CRUD functionality, in that you can create a new project, update a project, display a project (singularly and in a group) and finally delete a product. I utilized react-bootstrap for some of the CSS styling.</h5>
            <br /><br /><br />
            <ScrollLink to='top' className="dashBtn" smooth={true} duration={500}>Back to Top</ScrollLink>
        </div >
    )
}

export default Projects;
