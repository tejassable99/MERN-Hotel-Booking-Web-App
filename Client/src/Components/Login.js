import { useEffect} from 'react';
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

// import { MyContext } from './Mycontext';

import '../App.css'; // Import your CSS file

import { Message } from 'semantic-ui-react'
import {   Divider, Icon,Image} from 'semantic-ui-react'
const validator = require('validator');

const Login=()=>{
  let [uid,setId]=useState();
  let[name,setName]=useState();
  let[pass,setPass]=useState();
  let[msg,setMsg]=useState(true)
  let[fg,setFg]=useState({data:0})
  let [takenMsg,setTakenMsg]=useState(false)
  let nav=useNavigate()
  let[flag,Setflag]=useState(true)
  // let[name,Setname]=useState()
  // let[pass,Setpass]=useState()
  let[signUpmsg,setSignUpMsg]=useState(false)
  let[msgAlert,SetmsgAlert]=useState(false)
  let[f,Setf]=useState(true)
  let[firstName,setFirstName]=useState()
  let[lastName,setLastName]=useState()
  let[phNumber,setPhNumber]=useState()
  let[usernameValidation,setusernameValidation]=useState(false)
  

  const handleFlag=()=>{
    Setflag(!flag)
    SetmsgAlert(false)
    setTakenMsg(false)
    setSignUpMsg(false)
    setusernameValidation(false)
    
  
  }

 
 const handleName=(e)=>
 {
   setName(e.target.value)
 }
   
 const handlePass=(e)=>
 {
   setPass(e.target.value)
 }


//  const signIn=()=>
//  {
//    axios.get(`http://localhost:9000/signIn/${name}/${pass}`)
//    .then((temp)=> console.log(temp))
//    .catch((e)=> setMsg(e))
//  }



const signUp = () => {
  const id = uuidv4();
  setId(id);
  console.log(id);

  if (!name || !pass || !phNumber || !firstName || !lastName) {
    setSignUpMsg(true);
    setTakenMsg(false);
    setusernameValidation(false)
    SetmsgAlert(false)
  } else if (!validator.isEmail(name)) {
    // Check if the name is not a valid email address
    setusernameValidation(true)
    setSignUpMsg(false);
    setTakenMsg(false);
    SetmsgAlert(false)
  } else {
    axios
      .post("http://localhost:9000/signUp", { id, name, pass, phNumber, firstName, lastName })
      .then((res) => {
        msg = res.data;
        if (msg === false) {
          setTakenMsg(true);
          Setflag(false);
          SetmsgAlert(false);
          setSignUpMsg(false);
          setusernameValidation(false)
        } else {
          Setflag(!flag);
          SetmsgAlert(false);
          setTakenMsg(false);
          setSignUpMsg(false);
          setusernameValidation(false)
          // Reload the page after a successful signup
          window.location.reload();
        }
      })
      .catch((e) => setMsg(e));
  }
};


  // let u=null;
  // useEffect(()=>{
  
  //      if(u!=null)
  // {
  //   alert(u)
  // }
  
  // },[u])
  // const signIn=()=>
  //  {
  //    axios.get(`http://localhost:9000/signIn/${name}/${pass}`)
  //    .then((res)=>  u=res.data)
  //    .catch((e)=>console.log(e))
  //    console.log("gooooooooooooooo"+fg.data)
  //  }
//   }

//  const signIn=()=>
//  {
//    axios.get(`http://localhost:9000/signIn/${name}/${pass}`)
//    .then((res)=> const u=res.data)
   
  
 
//    .catch((e)=>console.log(e))
//    console.log("gooooooooooooooo"+u)
//    alert(u)
//    if(u=="not found ....")
//    {
//     alert("not welcome ")
//     // sessionStorage.setItem("id", JSON.stringify(uid));
  
  
//    }
//    else{
  
//          sessionStorage.setItem("id", (u));
//      console.log(u)
//      alert("welcome")
//       nav("/Home")

//    }
//  }
 let u;
const signIn = () => {
if(name=="admin123@gmail.com" && pass=="admin123"){
  nav("/UserBookings",{replace:true})
}
  // const axios = require('axios');
 else if(!name || !pass) {
    SetmsgAlert(true)
  } else{

  axios.get(`http://localhost:9000/signIn/${name}/${pass}`)
    .then((res) => {
       u = res.data;

      
      console.log(u);
      

      
      if (u=="not found ...." || u==false) {
        // alert("Not welcome");
        SetmsgAlert(true);
        
      } else {
        
         sessionStorage.setItem("id", u);
        console.log(u);
         alert("Welcome");
         nav("/Home",{ replace: true });
      }
    })
    .catch((e) => console.log(e));
  }
};


   const remove=()=>
   {
    console.log(uid)
    axios.delete(`http://localhost:9000/removeUser/${uid}`).then((res)=> console.log("delete"+res) ).catch((e)=> console.log("error "))
   }

 
   
  return (
   
//    <div>
//     <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as="h2" color="teal" textAlign="center">
//           Login to your account
//         </Header>
//         <Form size="large" >
//           <Segment stacked>
//             <Form.Input
//               fluid
//               icon="user"
//               iconPosition="left"
//               placeholder="Username"
//               onChange={handleName}
//             />
//             <Form.Input
//               fluid
//               icon="lock"
//               iconPosition="left"
//               placeholder="Password"
//               type="password"
//               onChange={handlePass}
//             />

// <Button color="teal" fluid size="large" onClick={signIn}>
//               Login
//             </Button>
//           </Segment>
//         </Form>
//         <Segment>
//           New to us?{' '}
//           <Button color="teal" onClick={signUp}>
//             Sign Up
//           </Button>
//         </Segment>
//       </Grid.Column>
//     </Grid>
//   </div>
<div>
    
<div className='fullscreen-bg' >
  <Image src='../login.jpg' fluid />

  <div className='fu' >
<Header as='h1' style={{ color:"white", fontFamily: 'cursive',  fontFamily: 'cursive',
    color: 'white', // A fancy pink color
    textAlign: 'center',
    fontSize: '3rem', // Larger font size for a more prominent look
    textTransform: 'uppercase',
    borderBottom: '2px solid #ff1493', // Matching border color
    padding: '20px'}} size='massive'>
  
  Tejas Hotel and Resorts

</Header>
</div>


  
{flag==true?

   <div className='login'>
    <Segment>
    {msgAlert==true?  <Message color='red'>Incorrect Username or Password</Message>: null}
    <Header as='h1' icon textAlign='center'>
    <Icon name="users"  iconPosition="right" size='massive' color='blue' />
    <Header.Content >Login</Header.Content>
    </Header>
    <Form>
      
      <Form.Input
        icon='user'
        iconPosition='left'
        label='Username'
        placeholder='Username'
        onChange={(e)=>setName(e.target.value)}
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Password'
        type='password'
        onChange={(e)=>setPass(e.target.value)}
        
      />

      <Button color="green" fluid  content='Login' onClick={signIn} />
      <Divider horizontal>Or</Divider>

<Button
color="purple" fluid  content='SignUp' 
onClick={handleFlag}
/>
    </Form>
      
    </Segment>
    </div>
    :
    <div className='login'>
    <Segment>
    {signUpmsg==true?  <Message color='red'>Fill All Mandatory Fields</Message>:takenMsg==true?<Message color='red'>Username Already Taken!!!</Message>:usernameValidation==true?<Message color='red'>Invalid Username!!!</Message>: null}
      <Header as='h1' icon textAlign='center'>
        <Icon name="users" iconPosition="right" size='massive' color='blue' />
        <Header.Content>SignUp</Header.Content>
      </Header>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='First Name'
          placeholder='First Name'
          required
          onChange={(e)=>setFirstName(e.target.value)}
        />
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Last Name'
          placeholder='Last Name'
          required
          onChange={(e)=>setLastName(e.target.value)}
        />
        <Form.Input
          icon='phone'
          iconPosition='left'
          label='Phone Number'
          placeholder='Phone Number'
          required
          onChange={(e)=>setPhNumber(e.target.value)}
        />
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username'
          placeholder='Username'
          required
          onChange={(e)=>setName(e.target.value)}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          required
          onChange={(e)=>setPass(e.target.value)}
        />
  
        <Button
          color="purple"
          fluid
          content='SignUp'
          onClick={signUp}
        />
      </Form>
    </Segment>
  </div>
  
}
   
</div>


</div>
  );
}

export default Login;                                                                                                                                                         