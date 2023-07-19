import React from 'react';
import { Image } from 'react-bootstrap';
import githubLogo from './images/github-mark-white.png';
import phone from './images/phone.png';
import Email from './images/Email.png';
import linkedinLogo from './images/linkedin-logo-png-1826.png';
import '../components/style.css';


const Contact = () => {
    return (
        <div className='contShell'>
            <div>
                <Image className='contactlogo' src={phone} alt='...'/>425-466-6581
                <br /> <br />   
                <Image className='contactlogo' src={linkedinLogo} alt='...'/><p>linkedin.com/in/erikdcarlson</p>
            </div>
            <div>
                <Image className='contactlogo' src={Email} alt='...'/>theroguechef@comcast.net
                <br /><br />
                <Image className='contactlogo' src={githubLogo} alt='...'/><p>github.com/TheRogueChef</p>
            </div>
        </div>
    )
}
export default Contact;