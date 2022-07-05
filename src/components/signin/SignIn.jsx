import React, {useState, useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth'
import './signin.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import {auth, googleSignIn, googleSignInRedirect, emailSignInRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

      // saving the data for when the user change url to go to accounts.google sign up
    const redirectResults = async() => {
        const response = await getRedirectResult(auth)
        
        if(response){
            const userDocRef = createUserDocumentFromAuth(response.user)
        }
    }

    useEffect(() => {
        redirectResults()
    },[]) // empty array run this function once when the component mounts for first time

        //the google sign in method uses POP sign in
    const logGoogleUserIn = async() => {
       const {user} = await googleSignIn()   //destructuring the user object from the API response
       const userDocRef = createUserDocumentFromAuth(user)
       console.log(userDocRef) 
    }
        //the logEmailUser method uses redirect
    const logEmailUser = async() => {
        const {user} = await emailSignInRedirect()
        const userDocRef = createUserDocumentFromAuth(user)
    }

 
   const handleSubmit = (event) => {
        event.preventDefault() 
    }
// Makes it dynamically set for email or password as the name will be replaced with email or password and the value will be the state
    const handleChange = (event) => {
        event.preventDefault()
        const {value, name} = event.target
        setEmail({
            [name]: value
        })
        setPassword({
            [name]: value
        })
    }



        return(
            <div className='sign-in'>
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in using email and password</span>
                    <form onSubmit={handleSubmit}>
                      <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email' required /> 
                                
                      <FormInput type='password' name='Password' value={password}
                        handleChange={handleChange} 
                        label='password'
                        required/>                              
                     </form>
                
                <div className='buttons-group'>
                  <CustomButton type='submit' onClick={logGoogleUserIn}> Google Pop up</CustomButton>
                  <CustomButton onClick={googleSignInRedirect}>  Google Redirect </CustomButton>
                  <CustomButton onClick={logEmailUser}>  Email Redirect </CustomButton> 
                </div>              
            </div>
        )
    
}

export default SignIn

/*

<form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='Email' required /> 
                                
                    <FormInput type='password' name='Password' value={this.state.password}
                     handleChange={this.handleChange} 
                     label='password'
                     required/>                              
                </form>
                */