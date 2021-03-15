import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';

const Navbar = () => {
    return(
        <div>
        <nav className='nav-wrapper white'>
                <a href='#' class='btn indigo right sidenav-trigger show-on-large' data-target='slide-in'>
                    <span className='white-text'>Actions</span>
                        <i class='material-icons left'>bolt</i>
                </a>
            <div className='container'>
                <Link to='/' className='brand-logo center blue-text dark-5 '>Finacular</Link>
                <a href='#' class='sidenav-trigger show-on-large' data-target='slide-out'>
                    <i class='material-icons black-text'>menu</i>
                </a>
                <SignedInLinks />
            </div>
        </nav>
        <ul class='sidenav my-sidenav-1' id='slide-out'>
            <li>
                <a href='#' class='btn indigo'>
                    <span className='white-text'>Dashboard</span>
                    <i class='material-icons left'>dashboard</i>
                </a>
            </li>
            <li>
                <a href='#' class='btn indigo'>
                    <span className='white-text'>Assets</span>
                    <i class='material-icons left'>pie_chart</i>
                </a>
            </li>
            <li>
                <a href='#' class='btn indigo'>
                    <span className='white-text'>Tracker</span>
                    <i class='material-icons left'>align_vertical_bottom</i>
                </a>
            </li>
            <li>
                <a href='#' class='btn indigo'>
                    <span className='white-text'>Planning</span>
                    <i class='material-icons left'>date_range</i>
                </a>
            </li>
            <li>
                <div class='user-view'>
                    <a href='#user'><img class='circle' src={require('../../Images/pic1.jpeg')}/></a>
                    <a href="#name"><span class="black-text name">Animesh K</span></a>
                </div>
            </li>
        </ul>
        <ul class='sidenav my-sidenav-2' id='slide-in'>
                <div className='row'>
                        <div class='col s12 l12'>
                            <div className='card' style={{ width:'235px',height:'205px'}}>
                                <div className='card-content black-text'>
                                <a href='#user'><img class='circle' src={require('../../Images/pic1.jpeg')}/></a>
                                    <p>Understand the power of compounding!!</p>
                                    <li>
                                        <a href='#' class='btn indigo'>
                                            <span className='white-text'>Learn More</span>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div class='col s12 l12'>
                            <div className='card' style={{ width:'235px',height:'205px'}}>
                                <div className='card-content black-text' >
                                    <a href='#user'><img class='circle' src={require('../../Images/pic1.jpeg')}/></a>
                                    <p>Track all your expences on a daily basis!</p>
                                    <li>
                                        <a href='#' class='btn indigo'>
                                            <span className='white-text'>Track Now</span>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
        </ul>
        </div>
    )
}
 

export default Navbar
