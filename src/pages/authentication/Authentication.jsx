import SignIn from '../../components/signin/SignIn'
import SignUpForm from '../../components/sign-up/SignUpForm'
import './authentication.styles.scss'

const Authentication = () => {
         return(
            <div className='authentication'>            
              <div className="forms-container">
                <SignIn/>
                <SignUpForm/>
              </div>             
            </div>        
         )    
}


export default Authentication