import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';

import { ButtonContainer } from './Button';
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top" >
                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapse_target">
                
                    <Link to='/'>
                        <img src={logo} alt="store" className="nav-brand ml-3" />
                    </Link>
                    <ul className="navbar-nav aligin-items-center" >
                        <li className="nav-item ml-3" >
                            <Link to='/' className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    
                    <Link to='/signUp'  className="nav-link ml-auto">

                        <span>Sign up</span>

                    </Link>
                   
                      
                    <Link to='/signIn' className="nav-link">

                        <span>Sign in</span>

                    </Link>
                  

                    <Link to='/cart' className="nav-link">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link> 
                </div>
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