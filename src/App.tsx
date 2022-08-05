import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout'
import Taglist from './Components/Taglist'
import Macrolist from './Components/Macrolist'
import Componentlist from './Components/Componentlist'
import Home from './Components/Home'
import './styles/App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='home' element={<Home/>}/>
                    <Route path='tags' element={<Taglist/>}/>
                    <Route path='tags/:tag' element={<Taglist/>}/>
                    <Route path='macros' element={<Macrolist/>}/>
                    <Route path='macros/:macro' element={<Macrolist/>}/>
                    <Route path='components' element={<Componentlist/>}/>
                    <Route path='components/:component' element={<Componentlist/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}