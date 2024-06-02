import NavBar from './NavBar';
import './Header.css';

function Header(){
    return (
        <header className="header">
            <a className="header-brand primary-font" href="#">@sarkar.arthur</a>
            <NavBar />
        </header>
    );
}

export default Header;