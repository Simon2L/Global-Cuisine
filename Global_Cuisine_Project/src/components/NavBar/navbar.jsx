import "./navbar.css"
import logotype from './white_noslogan_globalcuisinelogo.png'
import { useState, useEffect, useRef } from "react";
import { Link
  } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

    // onClick hamburger-menu
    const changeHandle = () => show ? setShow(false) : setShow(true)

    let menuRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if(!menuRef.current.contains(event.target)){
                setShow(false);
            }
        })
    })
    
    return(<>
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <img src={logotype}></img>
                </div>
                <ul className={"menu" + (show ? " is-active" : "")}>
                    <Link to="/">HOME</Link>
                    <Link to="#recipes">RECIPES</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/contact">CONTACT US</Link>
                </ul>
                <button ref={menuRef} className={"hamburger" + (show ? " is-active" : "")} onClick={ () => changeHandle()}>
                    <div className="bar"></div>
                </button>
            </nav>
        </div>
        </>
    )
}

export default Navbar;
