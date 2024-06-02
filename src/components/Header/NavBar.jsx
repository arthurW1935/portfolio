function NavBar(){
    const navContent = ["home", "expertise", "work", "contact"];
    return (
        <nav className="navbar">
            {navContent.map((item, index) => (
                <div key={index} className="nav-item" href="#">
                    <p className="nav-index secondary-font">0{index+1}</p>
                    <a href={"#"+item} className="nav-link secondary-font">//{item}</a>
                </div>
            ))}
        </nav>
    );
}

export default NavBar;