import { useState } from "react";

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const navContent = ["home", "expertise", "work", "contact"];

    return (
        <>
        <nav className="navbar">
            {navContent.map((item, index) => (
                <div key={index} className="nav-item" href="#">
                    <p className="nav-index secondary-font">0{index+1}</p>
                    <a href={"#"+item} className="nav-link secondary-font">//{item}</a>
                </div>
            ))}
            <div className="hamburger-menu" style={{display: menuOpen ? "flex" : "none"}}>
                {navContent.map((item, index) => (
                    <div key={index} className="hamburger-menu-item" href="#">
                        <p className="nav-index secondary-font">0{index+1}</p>
                        <a href={"#"+item} onClick={() => setMenuOpen(false)} className="nav-link secondary-font">//{item}</a>
                    </div>
                ))}
            </div>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}><i class={"fa-solid fa-"+ (menuOpen ? "xmark" : "bars")}></i></button>
        </nav>
        </>
    );
}

export default NavBar;