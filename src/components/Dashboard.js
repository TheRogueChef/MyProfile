import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';



const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='dashLeft'>
                <h1>Erik</h1>
                <h1 style={{ marginTop: '-3rem' }}>Carlson</h1>
                <h6 style={{ marginTop: '-.75rem' }}>Ex Chef gone rogue in the world of tech!!</h6>
            </div>
            <p style={{ color: 'silver', fontSize: '2rem'}}>~</p>
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
            </div>
        </div >
    )
}

export default Dashboard;