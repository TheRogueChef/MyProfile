import React from 'react';
import { Image } from 'react-bootstrap';
import siftedlogo from './images/siftedlogo.png';
import DAWSCOlogo from './images/DAWSCOlogo.jpg';
import EurestLogo from './images/EurestLogo.jpg';
import KizukiLogo from './images/KizukiLogo.png';
import '../components/style.css';


const WorkRecord = () => {
    return (
        <div className='wkShell'>
            <br  /><br  />
            <h1 style={{ fontFamily: 'SokaRegular', textDecoration:'underline', textShadow: '.2rem .2rem black'}}>Work Experience</h1>
            <br  /><br  />
            <div className='wkBox'>
                <Image className='wklogo' src={siftedlogo} alt='...' />
                <h3>Managing Chef | Sifted | Seattle, WA</h3>
                <h4>4/2022 - 10/2022</h4>
                <ul style={{ textAlign: 'inherit'}}>
                    <li>- Hired, trained and managed a staff from 5 - 10 people</li>
                    <li>- Followed HACCP guidelines in kitchen system creation and maintenance</li>
                    <li>- Lowered food cost by 2% on a very tight corporate budget</li>
                </ul>
            </div>
            <br  /><br  /><br  />
            <div className='wkBox'>
                <Image className='wklogo' src={DAWSCOlogo} alt='...' />
                <h3>General Manager | DAWSCO Corp. | Seattle, WA</h3>
                <h4>11/2019 - 1/2022</h4>
                <ul style={{ textAlign: 'inherit'}}>
                    <li>- Created and implemented employee manuals, safety protocols(HACCP focused), fleet catalogs, maintenance programs/documentation, product catalogs and all supportive pieces to a company that had none of these pieces prior to my employment</li>
                    <li>- Worked closely with IT team on custom designed inventory tracking system and also on custom built customer facing website</li>
                    <li>- Worked closely on lowering all costs and reimagining daily operations for maximized efficiency and cost lowering. Dropped monthly costs by 3-4% year over year</li>
                </ul>
            </div>
            <br  /><br  /><br  />
            <div className='wkBox'>
                <Image className='wklogo' src={EurestLogo} alt='...' />
                <h3>Director of Dining Services | Eurest Dining/Boeing | Everett, WA</h3>
                <h4>4/2019 - 11/2019</h4>
                <ul style={{ textAlign: 'inherit'}}>
                    <li>- Maintained a 28% food cost on very tight budgets</li>
                    <li>- Passed all internal and external reviews within a large corporate structure</li>
                    <li>- Worked closely with a small team of 6 in a highly challenging environment</li>
                </ul>
            </div>
            <br  /><br  /><br  />
            <div className='wkBox'>
                <Image className='plogo' src={KizukiLogo} alt='...' />
                <h3>Food Safety Specialist/Managing Chef | Kizuki Ramen & Izakaya | Seattle, WA</h3>
                <h4>7/2016 - 2/2019</h4>
                <ul style={{ textAlign: 'inherit'}}>
                    <li>- Designed a fully comprehensive food safety and sanitation program for a company of 7 restaurants plus a central kitchen facility(HACCP focused) Completed in 2017 this program continues to excel as an all-encompassing multi-facility program with only excellent ratings by all regulation authorities</li>
                    <li>- Worked in tandem with an outside IT company on adjusting and implementing an entirely new software system for multi-unit ordering, inventory tracking and financial review</li>
                    <li>- Lowered Central Facility food costs by 7%</li>
                    <li>- Lowered Operating costs by 20%</li>
                </ul>
                <br  />
            </div>
        </div >
    )
}

export default WorkRecord;