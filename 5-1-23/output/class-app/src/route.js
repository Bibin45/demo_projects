import {
    BrowserRouter as Router,
    Routes,
    Route,
    
}from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Mytable from './pages/Table';

function Mainroutes(){

    return(
        <Router>
            <Routes>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='/' exact element={<Register />}/> 
                <Route path='/table' exact element={<Mytable/>}/> 
            </Routes>
        </Router>
    )
}


export default Mainroutes