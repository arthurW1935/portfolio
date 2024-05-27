function NavBar(){
    const navContent = ["home", "expertise", "work", "experience", "contact"];
    return (
        <nav className="navbar">
            <a className="nav-brand primary-font" href="#">Arthur.</a>
            <div className="nav-content">
                {navContent.map((item, index) => (
                    <div key={index} className="nav-item" href="#">
                        <p className="nav-index secondary-font">0{index+1}</p>
                        <a href={"#"+item} className="nav-link secondary-font">//{item}</a>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;