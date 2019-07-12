import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <Navbar />     
       <Header />
        <Switch>          
        
          <Route exact path="/" component={ProductList}></Route>
          {/* <Route path="/signIn" component={SignIn} ></Route>
          <Route path="/signUp" component={SignUp} ></Route> */}
          <Route path="/details"  component={Details}></Route>
          
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />  
        <Modal/>     
       
      </React.Fragment>
    );
  }
}

export default App;
