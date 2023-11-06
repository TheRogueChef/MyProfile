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
                <div>
                    <a style={{ color: 'white', textDecoration: 'none' }} href='tel:425-466-6581'>
                        <Image className='contactlogo' src={phone} alt='...'/>
                        <p>425-466-6581</p>
                    </a>
                </div>  
                <div>
                    <a style={{ color: 'white', textDecoration: 'none' }} href='https://www.linkedin.com/in/erikdcarlson/' target='_blank' rel='noopener noreferrer'>
                        <Image className='contactlogo' src={linkedinLogo} alt='...'/>
                        <p>linkedin</p>
                    </a>
                </div>
            </div>
            <div>
                <div>
                    <a style={{ color: 'white', textDecoration: 'none' }} href='mailto:theroguechef@comcast.net'>
                        <Image className='contactlogo' src={Email} alt='...'/>
                        <p>theroguechef@comcast.net</p>
                    </a>
                </div>
                <div>
                    <a style={{ color: 'white', textDecoration: 'none' }} href='https://www.github.com/TheRogueChef/' target='_blank' rel='noopener noreferrer'>
                        <Image className='contactlogo' src={githubLogo} alt='...'/>
                        <p>github</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;