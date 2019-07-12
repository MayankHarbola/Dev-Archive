import React from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { Welcome } from "../components/Welcome";

export class Controller extends React.Component{
  constructor(props){
    super(props);
    this.msg = "";
    this.index = -1;
    this.user = {};
    this.Users = [];
    this.state = {register: false,showLogin: false,index: this.index,chngpwd:false}
  }

  loginbtn(){
    console.log("me yha hu")
    this.index = this.Users.findIndex(obj => obj.username === this.user.username && obj.password === this.user.password);
    console.log("this is array",this.Users,"this is object ",this.user);
    console.log(this.index);
    if(this.index<0){
     this.msg = "Invalid userId and Password.....";
    }
    this.setState({...this.state,index:this.index});
  }
  ToggleWelcome(){
    this.setState({...this.state,chngpwd:!this.state.chngpwd})
  }
  changePassword(){
    console.log("reached here......")
  var index =  this.Users.findIndex(obj => obj.password == this.user.password);
  console.log(index);
  if(index<0){
    this.msg = "prev pwd not found"
  }else{
  this.Users[index].password = this.user.NewPwd;
  this.msg = "password changed succesfully"
  }  
  console.log(this.msg);
  this.setState({...this.state})
}

  takeInput(event){
  
    console.log("id is",event.target.id," : ",event.target.value);
    this.user[event.target.id] = event.target.value;
    console.log(this.user);
   }
  Login(){
    if(this.index < 0){
    return (
      <div>
      <Login login = {this.loginbtn.bind(this)} inp = {this.takeInput.bind(this)} reg = {this.toggle.bind(this)}/>
      <p>{this.msg}</p>
      </div>
    )
    }else{
      return(
        <Welcome chngMsg = {this.msg} clickChangePwd = {this.changePassword.bind(this)} Chnginp = {this.takeInput.bind(this)} chngpwdStaus = {this.state.chngpwd}  chngpwd = {this.ToggleWelcome.bind(this)} username = {this.Users[this.index].username}/>
      )
    }
  }
  toggle(){
    this.msg = "";
    this.setState({register: !this.state.register,showLogin: false,index: this.index});
  }
  

  Registered(){
    this.Users.push(this.user);
    this.user = {};
    this.msg = `${this.Users[this.Users.length - 1].username} you have been succefully Registred plz login here....`;
    this.setState({...this.state,showLogin: true})
  }
  Register(){
   
    return (
     <Register show = {this.state.showLogin} msg = {this.msg} Registered = {this.Registered.bind(this)} in = {this.takeInput.bind(this)} reg = {this.toggle.bind(this)}/>
    )
  }

  render(){
    return (
      <div>
        {console.log("RE render")}
        {this.state.register? this.Register():this.Login()}
      </div>
    )
  }
}