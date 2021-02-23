import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import firebase from '../../../../firebase';
import md5 from 'md5';
import { Text, Div, Container, Button, Input, Col, Row, Switch, Label } from "atomize"
import { connect } from 'react-redux';

function RegisterPage(props){
  const {register, watch, errors, handleSubmit } = useForm();
  const [ errorFromSubmit, setErrorFromSubmit] = useState("")
  const [ loading, setLoading] = useState(false);
  const password = useRef();
  password.current = watch("password");
  console.log(watch("email"))

  const onSubmit = async (data) => {

    try{
      setLoading(true)
    let createdUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    console.log('createdUser', createdUser)
    
    await createdUser.user.updateProfile({
      //name: data.name,
      displayName: data.name,
      photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
    })

    //Firebase 데이터베이스에 저장
    await firebase.database().ref("users").child(createdUser.user.uid).set({
      displayName: createdUser.user.name,
      image: createdUser.user.photoURL
    })

    setLoading(false)
    } catch (error) {
      setErrorFromSubmit(error.message)
      setLoading(false)
      setTimeout(() => {
        setErrorFromSubmit("")
      }, 5000);
    } 
  }

console.log('password.current', password.current)

  return(
            <div>
             <>
            <Div 
                tag="section" 
                p={{ t: { xs: "6rem", md: "10rem" } }}
            >
               <div style={{textAlign: 'center'}} >
        <h1>채팅 회원가입</h1>
      </div>
     <form onSubmit={handleSubmit(onSubmit)}  align="center">
      
      <label>이메일</label>
      <label>{localStorage.getItem('userid')}</label>

      <Input w="30rem"
      name="email" type="email" 
      ref = {register({required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>this 이멜 field is required</p>}
      <label>name</label>
      <Input name="name"  w="30rem" align="center"
      ref = {register({required: true, maxLength: 10})}
      />
      {errors.name && errors.name.type === "required" && <p>this name field is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>this maxlen field is required</p>}
      <label>pass</label>
      <Input name="password" type="password"  w="30rem"
      ref = {register({required: true, minLength: 10})}
      />
      {errors.password && errors.password.type === "required" && <p>this pass field is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>this minlen field is required</p>}
      <label>passcon</label>
      <Input name="password_confirm" type="password"  w="30rem"
      ref = {register({
        required: true,
        validate: (value) =>
          value === password.current
        })}
      />
      {errors.password_confirm && errors.password_confirm.type === "required" && <p>this passcon field is required</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p>this vail field is required</p>}
        {
        errorFromSubmit &&
        <p>{errorFromSubmit}</p>
        }
      
      <input type="submit" disabled={loading}/>
      <Link style={{color : 'gray', textDecoration: 'none'}} to="login">이미 아이디가 있다면...</Link>
    </form>
            </Div>



        </>
        </div>
  )
}

function userStateToProps(state) {
  return {
    userinfo: state.reducer
  }
}
export default connect(userStateToProps)(RegisterPage)
