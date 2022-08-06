import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout'
import Tag from './Components/Tag'
import TagList from './Components/TagList'
import Macro from './Components/Macro'
import MacroList from './Components/MacroList'
import Component from './Components/Component'
import ComponentList from './Components/ComponentList'
import Argument from './Components/Argument'
import ArgumentList from './Components/ArgumentList'
import Home from './Components/Home'
import './styles/App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='home' element={<Home/>}/>
                    <Route path='tags' element={<TagList/>}/>
                    <Route path='tags/:tag' element={<Tag/>}/>
                    <Route path='macros' element={<MacroList/>}/>
                    <Route path='macros/:macro' element={<Macro/>}/>
                    <Route path='components' element={<ComponentList/>}/>
                    <Route path='components/:component' element={<Component/>}/>
                    <Route path='arguments' element={<ArgumentList/>}/>
                    <Route path='arguments/:argument' element={<Argument/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}