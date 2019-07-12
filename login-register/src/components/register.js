import React from 'react';

function show(props){
    return(
        
            <button onClick = {props.reg} >login</button>
        
    )
}

export const Register = (props)=>{
    return (
        <div>
            <button  onClick = {props.reg}>back</button>
            <h3>Register</h3>
            
            <label htmlFor="">Enter Username : </label>
            <input id = "username" onChange={props.in}  type="text" name=""  placeholder = "Enter Username"/>
            <br/>

            <label htmlFor="">Enter your password : </label>
            <input id = "password" onChange={props.in} type="text" name=""  placeholder = "Enter your password"/>
            <br/>
            
            <label htmlFor="">Enter Age : </label>
            <input id = "Age" onChange={props.in} type="text" name=""  placeholder = "Age"/>
            <br/>

            <label htmlFor="">Enter Address : </label>
            <input id = "Address" onChange={props.in} type="text" name=""  placeholder = "Address"/>
            <br/>

            <label htmlFor="">Enter phone Number : </label>
            <input id = "phoneNo" onChange={props.in} type="text" name=""  placeholder = "phone Number" />
            <br/>

            <label htmlFor="">Enter Email ID : </label>
            <input id = "EmailId" onChange={props.in} type="text" name=""  placeholder = "Email ID" />
            <br/>

            <button onClick = {props.Registered}>Register</button>
            <br/>
            <label>{props.msg}</label>
        
            {props.show ? show(props): ""}
        </div>
    )
}