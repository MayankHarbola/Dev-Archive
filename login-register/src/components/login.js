import React from 'react';

export const Login = (props)=>{
    return(
        <div>
            <h3>Login</h3>  
            
            <label htmlFor="">Enter Username : : </label>
            <input id = "username" onChange = {props.inp} type="text" placeholder = "Enter Username : "/>
            
            <br/>

            <label htmlFor="">Password : </label>
            <input type="text" onChange = {props.inp} placeholder = "Enter your Password"name="" id="password"/>

            <hr/>
           
            <button>Reset</button>
            <button onClick = {props.reg}>Register</button>
            <button onClick = {props.login}>Login</button>
        </div>
    )
}