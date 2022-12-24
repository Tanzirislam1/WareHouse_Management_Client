import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Style/Navbar/Navbar.css';
import CustomLink from '../CustomLink/CustomLink';
import { motion } from 'framer-motion';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Navbar = () => {
    const navigate = useNavigate();
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
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/inventory">Inventory</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/blog">Blog</CustomLink>
                        </li>

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
                    </ul>

                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2.5 }} style={{ fontSize: '18px', color: '#fff', marginRight: '15px' }}>{user?.displayName}</motion.span>
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
            </div>
        </nav>
    );
};

export default Navbar;