import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
       <ul className='right'>
           <li><NavLink to='/' className='material-icons grey-text darken-4'>settings</NavLink></li>
           <li><NavLink to='/' className='material-icons grey-text darken-4'>notifications</NavLink></li>
       </ul>
    )
}


export default SignedInLinks