import docs from '../assets/docs.json';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import '../styles/App.scss'

export default function SideBar() {
    return (
        <ProSidebar>
            <SidebarHeader>
                Quest BSML Docs
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='square'>
                    <SubMenu title="Home">
                    </SubMenu>
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
                <a 
                    href="https://github.com/RedBrumbler/Quest-BSML" 
                    target='_blank'
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                > 
                Visit the Github Repo! 
                </a>
            </SidebarFooter>
        </ProSidebar>
        )
}

