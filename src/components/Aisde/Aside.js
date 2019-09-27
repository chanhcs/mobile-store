import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aside from './aside.png'
import './Aside.css';

class Aside extends Component {
    render() {
 
        return (
            <div>
                <div className="aside" >
                    <div className="container" >
                        <h3 className="title" >Phone</h3>
                        <hr></hr>
                    </div>
                    <div className="list">
                        <nav className="nav flex-column " >
                            <img alt='aside' style={{marginBottom: "40px", marginTop: "30px"}} src={aside} width="250px" height="180px"/>
                            <Link to='/' className="nav-link ">Iphone 11 Pro Max</Link>
                            <Link to='/' className="nav-link ">Google Pixel - Black</Link>
                            <Link to='/' className="nav-link " > Samsung S7</Link>
                            <Link to='/' className="nav-link">HTC 10 - Black</Link>
                            <Link to='/' className="nav-link">HTC 10 - White</Link>
                            <Link to='/' className="nav-link">HTC Desire 626s</Link>
                            <Link to='/' className="nav-link">Vintage Iphone</Link>
                            <Link to='/' className="nav-link">Iphone 7</Link>
                            <Link to='/' className="nav-link">Smashed Iphone</Link>
                        </nav>
                    </div>


                </div>



            </div>
        );
    }
}







export default Aside;