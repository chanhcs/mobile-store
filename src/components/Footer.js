import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{ background: '#292b2c', color: 'gray', fontSize:'14px'}}>
                <div className="container py-5" >
                    <div className="row">
                        <div className="col-md-3 col-lg-3">
                       
                            <h6> CUSTOMER SUPPORT </h6>
                            <hr color='gray'></hr>
                            <div className="nav flex-column" >

                                <span> Hotline: 0378622863</span>
                                <span>Mail: pmchanhpk@gmail.com</span>
                                <span>Adress: Go Vap - Ho Chi Minh</span>

                            </div>

                        </div>

                        <div className="col-md-3 col-lg-3">
                          
                            <h6> COOPERATION AND LINKS</h6>
                            <hr color='gray'></hr>
                            <div className="nav flex-column" >

                                <span>Apple</span>
                                <span> SamSung</span>
                                <span> Google </span>

                            </div>



                        </div>

                        <div className="col-md-3 col-lg-3">
                          
                            <h6> ABOUT WEBSITE</h6>
                            <hr color='gray'></hr>
                            <div className="nav flex-column" >

                                <span>Phone business</span>
                                <span>High level technical expertise</span>
                                <span>Phone system special</span>

                            </div>



                        </div>
                        <div className="col-md-3 col-lg-3">
                      
                            <h6>CONNECT WITH US</h6>
                            <hr color='gray'></hr>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
