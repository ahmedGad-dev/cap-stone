import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/header/Header';
import SignIn from './components/signin/SignIn';

const Shop = () => {
  return(
    <h1>I am Shop Page</h1>
  )
}

const App = () =>  {
  return( 
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>      
    </Routes>
    )
}

export default App;

  
