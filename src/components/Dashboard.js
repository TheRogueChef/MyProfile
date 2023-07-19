import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';



const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='dashLeft'>
                <h1>Erik</h1>
                <h1 style={{ marginTop: '-1rem'}}>Carlson</h1>
                <h3 >Ex Chef gone rogue in the world of tech!!</h3>
            </div>
            <p style={{ color: 'silver', fontSize: '1rem'}}>~</p>
            <div className='dashRight'>
                <Link to='about' smooth={true} duration={500} >About Me</Link>
                <br /><br />
                <Link  to='projects' smooth={true} duration={500}>Projects</Link>
                <br /><br />
                <Link to='techSkills' smooth={true} duration={500}>Tech Skills</Link>
                <br /><br />
                <Link to='education' smooth={true} duration={500}>Education</Link>
                <br /><br />
                <Link to='experience' smooth={true} duration={500}>Experience</Link>
                <br /><br />
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
                <br /><br />
            </div>
        </div >
    )
}

export default Dashboard;