import {
    BrowserRouter as Router,
    Routes,
    Route,
    
}from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'



function Mainroutes(){

    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/view' exact element={<View/>}/> 
                 
            </Routes>
        </Router>
    )
}


export default Mainroutes