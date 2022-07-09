import React, {useState, useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth'
import './signin.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import {auth,
        signInWithGooglePopup,
     // googleSignInRedirect,
        createUserDocumentFromAuth,       
        signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
       const [formFields, setFormFields] = useState(defaultFormFields)
       const {email, password} = formFields




   //the google sign in method uses POP sign in
   const SignInWithGoogle = async() => {
       await signInWithGooglePopup()         
    }

    const resetDefaultFormFields = () => {
        setFormFields(defaultFormFields)
      }

      // saving the data for when the user change url to go to accounts.google sign up
    const redirectResults = async() =>{
      const response = await getRedirectResult(auth)      
      if(response){
          await createUserDocumentFromAuth(response.user)
      }
    }

    useEffect(() => {
        redirectResults()
    },[]) // empty array run this function once when the component mounts for first time

   const handleSubmit = async(event) => {
        event.preventDefault() 
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            resetDefaultFormFields()
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                     alert('Incoorect password, please try again');
                     break     //break makes it that once an error is found the switch will not try to run the rest of switch code
                case 'auth/user-not-found':
                     alert('No user associated with this email');
                     break
                default: 
                     console.log(error)
            }     
        }
    }

// Makes it dynamically set for email or password as the name will be replaced with email or password and the value will be the state
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target 
        setFormFields({
            ...formFields,
            [name]: value
          }) 
        }
 
        return(
            <div className='sign-in'>
                    <h1>Sign In</h1>
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in using email and password</span>
                    <form onSubmit={handleSubmit}>
                      <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required /> 
                                
                      <FormInput type='password' name='password' value={password}
                        onChange={handleChange} 
                        label='password'
                        required/> 

                      <div className='buttons-group'>
                       <CustomButton  type='submit'> Sign In </CustomButton> 
                       <CustomButton  type='button' buttonType='google' onClick={SignInWithGoogle}> Google Sign In </CustomButton>              
                      </div>  
                    </form>          
            </div>
        )
    }

export default SignIn

