import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter , NavLink , Route , Link, Redirect, Router} from 'react-router-dom' ;
import AuthenticateLogin from './Authenticate'
import Token from './dataStore/token.json';


class loginForm extends React.Component {

    state = {
        userName  : '' ,
        password : '' ,
        clickLogin : 0 ,
        usersData : this.props.users ,
        token : undefined , 
    }

    componentDidMount(){
        this.setState({
            token : Token ,
        })
    }

    checkLogin = (e) => {
        localStorage.clear();
        var found = false ;
        this.setState({clickLogin : 1}) ;
          this.state.usersData.forEach(element => {
              if (element.userName == this.state.userName && element.password == this.state.password){
                  localStorage.setItem('token', this.state.token);
                  localStorage.setItem('userName', this.state.userName);
                  found = true ;
                  
              }
          });
          if (!found){
              alert("worng name or password") ;
          }
    }
    render() { if (this.state.clickLogin) {
        return <>
       <AuthenticateLogin />
        </>
    }
       else {
        return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
               <div className="container-fluid">
                 <a className="navbar-brand">Login </a>
                </div>
            </nav>

            <br />
            <form>
                
                <input className="form-control" type="text" id ="userName" name ="userName" placeholder = 'user name'   onChange ={e => this.setState({userName : e.target.value})}/>
                <br />
                <input className="form-control" type = "password" id ="password" name = "password" placeholder = "Password"  onChange = {e => this.setState({password : e.target.value})}/>
                <br />
                
                <BrowserRouter>
                <Link to = "/home">
                <button  className = "btn btn-primary" onClick= {this.checkLogin}> submit </button>
                </Link>
                </BrowserRouter>
                </form>
        </div> 
        );
       }
    }
}
function mapStateToProps (state) {
   return {
       users : state.users ,
   } ;
}







 
export default connect (mapStateToProps) (loginForm);