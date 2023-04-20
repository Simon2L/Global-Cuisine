import "./Navbar.css"
import logotype from './white_noslogan_globalcuisinelogo.png'
import { useState, useEffect, useRef } from "react";

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
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logotype}></img>
                </div>
                <ul className={"menu" + (show ? " is-active" : "")}>
                    <a href="#home">HOME</a>
                    <a href="#recipes">RECIPES</a>
                    <a href="#about">ABOUT</a>
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