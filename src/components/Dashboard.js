import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import techlogo from './images/techlogo.png';
import '../components/style.css';



const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='dashLeft'>
                <h1>Erik</h1>
                <h1 style={{ marginTop: '-130px' }}>Carlson</h1>
            </div>
            <Image className='dashPic' src={techlogo} alt='...' style={{ marginLeft: '-75px' }} />
            <div className='dashRight'>
                <Link className='dashBtn' to='about' smooth={true} duration={500} >About Me</Link>
                <br /><br />
                <Link className='dashBtn' to='projects' smooth={true} duration={500}>Projects</Link>
                <br /><br />
                <Link className='dashBtn' to='techSkills' smooth={true} duration={500}>Tech Skills</Link>
                <br /><br />
                <Link className='dashBtn' to='education' smooth={true} duration={500}>Education</Link>
                <br /><br />
                <Link className='dashBtn' to='experience' smooth={true} duration={500}>Experience</Link>
                <br /><br />
                <Link className='dashBtn' to='contact' smooth={true} duration={500}>Contact</Link>
            </div>
        </div >
    )
}

export default Dashboard;