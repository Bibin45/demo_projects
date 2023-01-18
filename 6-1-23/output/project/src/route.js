import {
    BrowserRouter as Router,
    Routes,
    Route,
    
}from 'react-router-dom'
import Create from './components/Create';
import Mychart from './pages/Chart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function Mainroutes(){

    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/register' exact element={<Register/>}/> 
                <Route path='/home' exact element={<Home/>}/> 
                <Route path='/create' exact element={<Create/>}/>
                <Route path='/chart' exact element={<Mychart/>}/>  
            </Routes>
        </Router>
    )
}


export default Mainroutes