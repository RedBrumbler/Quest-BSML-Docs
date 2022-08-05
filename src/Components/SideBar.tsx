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
                        { docs.tags.map(t => {
                            return (
                                <MenuItem> 
                                    {t.name} 
                                    <Link to={"/tags/" + t.name}/>
                                </MenuItem>
                            )
                        }) }
                        
                    </SubMenu>
                    <SubMenu title="Macros">
                        { docs.macros.map(m => {
                            return (
                                <MenuItem> 
                                    {m.name} 
                                    <Link to={"/macros/" + m.name}/>
                                </MenuItem>
                                )
                        }) }
                    </SubMenu>
                    <SubMenu title="Components">
                        { docs.components.map(c => {
                            return (
                                <MenuItem> 
                                    {c.typename}
                                    <Link to={"/components/" + c.typename}/>
                                </MenuItem>
                            )
                        }) }
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <a href="https://github.com/RedBrumbler/Quest-BSML"> Visit the Github Repo! </a>
            </SidebarFooter>
        </ProSidebar>
        )
}

