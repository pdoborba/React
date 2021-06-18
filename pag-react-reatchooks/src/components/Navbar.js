import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGitlab } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
 
 function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('relize', showButton);

     return (
         <>
         <IconContext.Provider value={{ color:'#fff'}}>
           <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' 
                    className="navbar-logo" onClick={closeMobileMenu}>
                    <FaGitlab
                    className="navbar-icon" />
                    GITBANK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                   {click ? <FaTimes /> : <FaBars />} 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Início
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Serviços
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            Produtos
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-links" >
                                <Button buttonStyle='btn--outline'>CADASTRO</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-links" onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline btn--mobile'> CADASTRO </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
           </div>
           </IconContext.Provider>
         </>
     )
 }
 
 export default Navbar;
 