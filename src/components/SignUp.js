import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./SignUp.css";
import {Link} from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.name.length && this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit}>

        <FormGroup controlId="name" size="large">
            Name
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>


          <FormGroup controlId="email" size="large">
            Email
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            Password
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

         
            <Button
                block
                size="large"
                disabled={!this.validateForm()}
                type="submit"
            >
                Sign up
                
          </Button>
                        
                   
            
         
        </form>
      </div>
    );
  }
}