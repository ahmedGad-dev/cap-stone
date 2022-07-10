import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Authentication from './pages/authentication/Authentication';
import Shop from './pages/shop/Shop';

const App = () =>  {
  return( 
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
      </Route>      
    </Routes>
    )
}

export default App;

  
