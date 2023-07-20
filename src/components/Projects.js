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
            <h1 className='CTitles'>Projects</h1>
            <br />
            <div className='pBox'>
                    <Image className='plogo' src={KitSyncLogo} alt='...' />
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
            <br /><br /><br />
            <div className='pBox'>
                    <Image className='plogo' src={Author} alt='...' />
                    <h1 style={{ fontFamily: 'SokaRegular'}}>Author, Author</h1>
                <div className='pLinkBox'>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='http://github.com/TheRogueChef/Authors'>GitHub Link</RouterLink>
                    <br/>
                    <RouterLink style={{ color: 'red'}} to='/AADemo'>Demo</RouterLink>
                    <br/>
                </div>
                <ul>
                    <li>-Created in JavaScript</li>
                    <li>-Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>-Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <p>Author, Author was a project where I was learning how to use the CRUD functions and the app itself is simply an authors name file with the ability to create a new author, edit an author, display and author (singularly and in a group) and finally delete an author. I was also learning more about CSS and how to format a webpage.</p>
            <br /><br /><br />
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
