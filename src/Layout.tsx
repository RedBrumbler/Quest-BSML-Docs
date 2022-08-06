import {Outlet} from 'react-router-dom';
import SideBar from './Components/SideBar'

export default function Layout() {
    return (
        <main className='app'>
            <div className='centerapp'>
                <SideBar/>
                <Outlet/>
            </div>
        </main>
    )
}