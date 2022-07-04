import React, {useState} from 'react'
import './signin.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { googleSignIn, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logGoogleUserIn = async() => {
       const {user} = await googleSignIn()   //destructuring the user object from the API response
       const userDocRef = createUserDocumentFromAuth(user)
       console.log(userDocRef) 
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


 /*   googleHandler = async () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });
    };*/

    
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
                  <CustomButton type='submit' onClick={logGoogleUserIn}>Sign In</CustomButton>
                  <CustomButton isGoogleSignin> Sign In With Google </CustomButton> 
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