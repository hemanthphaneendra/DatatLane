import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Sidebar = (props) => {
    let sidebar = props.sidebar; 
    let showSidebar = props.showSidebar;
    const location = useLocation()

    return (
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            const path = item.path;
                            return (
                                <li key={index} className={item.cName}>
                                <Link to={item.path} style={{backgroundColor:location.pathname===path?"#1a83ff":"#060b26"}}>
                                    <p style={{fontSize:"23px"}}>{item.icon}</p>
                                    <span>{item.title}</span>
                                </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
    )
}

export default Sidebar