import {Outlet} from 'react-router-dom';
import SideBar from './SideBar'

export default function Layout() {
    return (
        <main className='app'>
            <SideBar/>
            <Outlet/>
        </main>
    )
}