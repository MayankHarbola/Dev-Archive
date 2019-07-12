import React from 'react';
import { ChangePwd } from './chngPWD';



export const Welcome = (props)=>{

    if(props.chngpwdStaus == false){
    return(
        <div>
          <h3>Welcome {props.username}</h3>  

          <button onClick = {props.chngpwd}>change Password</button>
          <button>update Profile</button>
        </div>
    )
    }
    else{
        return(
            <ChangePwd msg = {props.chngMsg} click = {props.clickChangePwd} prev = {props.Chnginp} newpwd = {props.Chnginp}/>
        )
    }
}