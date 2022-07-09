import React, { useContext, useState, useEffect} from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

/*const initial_state = {
    user: {},
    userLoggedIn: false
}*/


export const UserContext = React.createContext({
    currentUser: null,
    setCurrentUser : () => null
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener( (user) => {
    if(user) {
      createUserDocumentFromAuth(user)  //if user is new create a new instance in the database, for when signing in with google
    }
    setCurrentUser(user)
   })
  

   return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{
        currentUser,
        setCurrentUser
    }}
     >
        {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(UserContext)
  }
  

