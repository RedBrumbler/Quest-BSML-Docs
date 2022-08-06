import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Tag from './Pages/Tag'
import TagList from './Pages/TagList'
import Macro from './Pages/Macro'
import MacroList from './Pages/MacroList'
import Component from './Pages/Component'
import ComponentList from './Pages/ComponentList'
import Argument from './Pages/Argument'
import ArgumentList from './Pages/ArgumentList'
import Home from './Pages/Home'
import Unknown from './Pages/Unknown'
import './styles/App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='tags' element={<TagList/>}/>
                    <Route path='tags/:tag' element={<Tag/>}/>
                    <Route path='macros' element={<MacroList/>}/>
                    <Route path='macros/:macro' element={<Macro/>}/>
                    <Route path='components' element={<ComponentList/>}/>
                    <Route path='components/:component' element={<Component/>}/>
                    <Route path='arguments' element={<ArgumentList/>}/>
                    <Route path='arguments/:argument' element={<Argument/>}/>
                    <Route path='*' element={<Unknown/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}