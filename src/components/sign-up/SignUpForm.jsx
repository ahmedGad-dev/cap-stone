import React, {useState} from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields)
   const { displayName, email, password, confirmPassword} = formFields

 
   
   const handleChange = (event) => {
      event.preventDefault();
      const {name, value} = event.target 
      setFormFields({
        ...formFields,
        [name]:value
      })
    }

    const resetDefaultFormFields = () => {
      setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords does not match ')
            return
         }
        try {
           const {user} = await createAuthUserWithEmailAndPassword(email, password)       
           await createUserDocumentFromAuth(user, {displayName});
            resetDefaultFormFields();        
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
              alert('Can not create user, Email already in use')
            }
            console.log('error while creating user' , error)
          }
    }

       return(
         <div className='sign-up'>
             <h2 className='title'> I dont have an account </h2>
             <span>Sign up with email and password</span>
             <form className='sign-up-form' onSubmit={handleSubmit}>
               <FormInput type='text' name='displayName' onChange={handleChange} label='Display Name' required value={displayName}/>
               <FormInput type='email' name='email'  onChange={handleChange} label='Email' required value={email}/>
               <FormInput type='password' name='password'  onChange={handleChange} label='Password' required value={password}/>
               <FormInput type='password' name='confirmPassword'  onChange={handleChange} label='Confirm Password' required  value={confirmPassword}/>
               <CustomButton type='submit'>Sign Up</CustomButton>
             </form>            
         </div>
      )
   }


export default SignUpForm