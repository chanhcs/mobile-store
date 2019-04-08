import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';

import {ButtonContainer} from './Button';
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >

                <Link to='/'>
                    <img src={logo} alt="store" className="nav-brand" />
                </Link>
                <ul className="navbar-nav aligin-items-center" >
                    <li className="nav-item ml-5" >
                        <Link to='/' className="nav-link">
                            Products
                         </Link>
                    </li>
                </ul>

                <Link to='/signup' className="nav-link ml-auto">
                    
                    <span>Sign up</span>
               
            </Link>
                <Link to='/login' className="nav-link">
                    
                        <span>Sign in</span>
                   
                </Link>

                <Link to='/cart' >
                   

                    
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>

                        my cart
                    </ButtonContainer>
                </Link>

      

            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`    
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-tranform: capitalize !important;
    }
`;

export default Navbar;