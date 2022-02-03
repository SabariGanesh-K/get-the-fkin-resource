import {React} from 'react'
import Home from './home';
import { Routes, Route} from "react-router-dom";

const Main = () =>{

    return(
        <div>
            <Routes>
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "*" element = {<Home/>}/>
            </Routes>
        </div>
    )
}

export default Main