import React, { Component } from 'react';
import './form.css';
import Form from './form';
import Joi from 'joi-browser';

class LoginForm  extends Form {

    state={
        data : {username : "", password: ""},
        errors : {}
    }

    username = React.createRef();

    // componentDidMount(){
    //     this.username.current.focus();
    // }

    schema = {
 
        username :  Joi.string().required().email().label('Username'),

         password : Joi.string().required().min(6).label('Password',)
    }


      doSumit = ()=>{
       //call the server
        console.log("Submitted");
   }

    render() { 

        return ( 

           <div > 
           <div  className = "row my-5">

             <div className = "col-md-4"> </div>
             <div className = "col-md-4"  login-form> 
             <form onSubmit={this.handleSubmit}>

            <h1 className = "text-center log_text">  Login </h1>
            <img src = ""></img>
            
            {this.renderInput('username', 'Username')}
            {this.renderInput('password', 'Password', "password")}
            {this.renderButton('Login')}

        </form>
        </div>

             <div className = "col-md-3"> </div>
           
         </div>
               </div>
         );
    }
}
 
export default LoginForm;