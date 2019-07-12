import React from 'react';

export const ChangePwd = (props)=>{
    return(
        <div>
            <h3>Change Password</h3>

            <label htmlFor="">Enter Your previous Password</label>
            <input onChange = {props.prev} type="text" id = "password" placeholder = "Enter your previous password"/>
            
            <br/>
            <label htmlFor="">Enter Your New Password</label>
            <input type="text" onChange = {props.newpwd} name="" id="NewPwd" placeholder = "Enter Your New Password"/>

             <br/>
            <button onClick = {props.click}>Change Password</button>
            <p>{props.msg}</p>
        </div>
    )
}