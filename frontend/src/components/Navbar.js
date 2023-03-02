import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import '../css/Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    console.log(window.location.pathname)
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(true);
    return (
        <>
            <IconContext.Provider value = {{color:'#fff'}}>
                <div className='navbar'>
                    <div style={{display:"flex"}}>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <Link to="/" style={{color:"white",textDecoration:"none",paddingLeft:"50px"}}>
                            <h1 style={{paddingBottom:"10px",paddingLeft:"160px"}}>DataLane</h1>
                        </Link>
                    </div>
                    { user && (
                        <div style={{display:"flex"}}>
                            <span style={{color:"white",paddingRight:"20px",paddingTop:"7px"}}>{user.email}</span>
                            <button onClick={handleClick} className="logout-button">Log out</button>
                        </div>
                    )}
                    { !user && (
                        <div style={{display:"flex"}}>
                            <Link to="/signup" style={{color:"white",textDecoration:"none",paddingRight:"10px"}}>Signup</Link>
                            <Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link>
                        </div>
                    )}
                    
                </div>
                <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
            </IconContext.Provider>
        </>
    )
}

export default Navbar