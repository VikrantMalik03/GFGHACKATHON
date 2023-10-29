import {Routes, Route} from 'react-router-dom';
import Home from "../src/Home";
import Contact from "../src/Contact";
import Information from "../src/Information"

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/information' element={<Information/>}/>
    </Routes>
}

export default Routers;