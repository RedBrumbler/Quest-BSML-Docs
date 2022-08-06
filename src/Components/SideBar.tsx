import docs from '../assets/docs.json';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import '../styles/App.scss'

import { FaGithub } from 'react-icons/fa';

export default function SideBar() {
    return (
        <ProSidebar>
            <SidebarHeader>
                <div className='sidebar-header'>
                    <img src='BSQML.png' alt='Logo' className='sidebar-logo'/>
                    Quest BSML Docs
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='square'>
                    <MenuItem>Home<Link to='/home'/></MenuItem>
                    <SubMenu title="Tags">
                        <MenuItem>All Tags<Link to='/tags'/></MenuItem>
                        { docs.tags.sort((a, b) => a.name.localeCompare(b.name)).map(t => {
                            return (
                                <MenuItem> 
                                    {t.name} 
                                    <Link to={"/tags/" + t.name}/>
                                </MenuItem>
                            )
                        }) }
                        
                    </SubMenu>
                    <SubMenu title="Macros">
                        <MenuItem>All Macros<Link to='/macros'/></MenuItem>
                        { docs.macros.sort((a, b) => a.name.localeCompare(b.name)).map(m => {
                            return (
                                <MenuItem> 
                                    {m.name} 
                                    <Link to={"/macros/" + m.name}/>
                                </MenuItem>
                                )
                        }) }
                    </SubMenu>
                    <SubMenu title="Components">
                        <MenuItem>All Components<Link to='/components'/></MenuItem>
                        { docs.components.sort((a, b) => a.typename.localeCompare(b.typename)).map(c => {
                            return (
                                <MenuItem> 
                                    {c.typename}
                                    <Link to={"/components/" + c.typename}/>
                                </MenuItem>
                            )
                        }) }
                    </SubMenu>
                    <SubMenu title="Arguments">
                        <MenuItem>All Arguments<Link to='/arguments'/></MenuItem>
                        { docs.arguments.sort((a, b) => a.name.localeCompare(b.name)).map(a => {
                            return (
                                <MenuItem> 
                                    {a.name}
                                    <Link to={"/arguments/" + a.name}/>
                                </MenuItem>
                            )
                        }) }
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <div className='sidebar-btn-wrapper'>
                    <a
                        href="https://github.com/RedBrumbler/Quest-BSML" 
                        target='_blank'
                        className="sidebar-btn"
                        rel="noopener noreferrer">
                        <FaGithub style={{width: '3rem', height: '3rem'}}/>
                        <span style={{
                            margin: '1rem'
                        }}>
                            View source 
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
        )
}

