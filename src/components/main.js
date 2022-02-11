import {React} from 'react'
import Home from './home';
import { Routes, Route} from "react-router-dom";
import Departments from './departments';
import Resources from './resourcepage';

const Main = () =>{

    return(
        <div>
            <Routes>
                <Route path = "/home" element = {<Home/>}/>
                <Route exact path = "/categories" element = {<Departments/> }/>
                <Route path = "/categories/:deptid" element = { <Resources/> }/>
                <Route path = "*" element = {<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main