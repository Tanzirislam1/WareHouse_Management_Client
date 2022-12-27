import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Style/Navbar/Navbar.scss';
import CustomLink from '../CustomLink/CustomLink';
import { motion } from 'framer-motion';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    // console.log(user);

    const handleSignOut = async () => {
        const isSignOut = window.confirm("are you sure want to Logout");
        if (isSignOut === true) {
            const success = await signOut();
            if (success) {
                navigate('/login');
            }
        }
    }

    const handleSignUp = () => {
        navigate(`/signup`);
    }

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="container">
                    <motion.a className="navbar-brand" to="/"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring", stiffness: 100, delay: 2,
                            duration: 1
                        }}
                    >
                        <img className='logo' src="https://i.ibb.co/wCWHkjw/autozone.png" alt="autozone" border="0" />
                    </motion.a>

                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                    </div>

                    <div className='navbar-nav'>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>

                                <CustomLink
                                    onClick={closeMenu}
                                    className="nav-link"
                                    to="/"
                                    activeClassName="active-route"
                                    isActive={() => location.pathname === '/'}
                                >
                                    Home
                                </CustomLink>
                            </li>

                            <li className='nav-item'>
                                <CustomLink
                                    onClick={closeMenu}
                                    className="nav-link"
                                    to="/inventory"
                                    activeClassName="active-route"
                                    isActive={() => location.pathname === '/inventory'}
                                >
                                    Inventory
                                </CustomLink>
                            </li>

                            <li className='nav-item'>
                                <CustomLink
                                    onClick={closeMenu}
                                    className="nav-link"
                                    to="/blog"
                                    activeClassName="active-route"
                                    isActive={() => location.pathname === '/blog'}
                                >
                                    Blog
                                </CustomLink>
                            </li>

                            {/* if user login then show this route */}
                            {user && <li className="nav-item">
                                <CustomLink className="nav-link" to="/manageInventory">manage inventory</CustomLink>
                            </li>}

                            {
                                user && <li className="nav-item">
                                    <CustomLink className="nav-link" to="/addInventory">Add inventory</CustomLink>
                                </li>
                            }
                            {
                                user && <li className="nav-item">
                                    <CustomLink className="nav-link" to="/myItems">My Items</CustomLink>
                                </li>
                            }

                            {/* login or signup btn condition */}

                            <div className='login-signup-btn'>
                                <motion.span className='user-name' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2.5 }} style={{ fontSize: '18px', color: '#fff' }}>{user?.displayName}</motion.span>
                                {user ? <motion.button
                                    onClick={handleSignOut}
                                    className='login_btn'
                                    initial={{ opacity: 0, x: "-100vw" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{
                                        type: "spring", stiffness: 100, delay: 0.5,
                                        x: { duration: 1.5 },
                                        default: { ease: "linear" }
                                    }}
                                >
                                    Sign out
                                </motion.button> : <motion.button onClick={handleSignUp} className='login_btn'
                                    initial={{ opacity: 0, x: "-100vw" }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{
                                        type: "spring", stiffness: 100, delay: 0.5,
                                        x: { duration: 1.5 },
                                        default: { ease: "linear" }
                                    }}
                                >
                                    SignUp
                                </motion.button>}
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;