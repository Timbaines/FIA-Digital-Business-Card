import fiaLogo from '/FIA_logo-150x150.png';
import {useState} from "react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <header className="header">
            <div className="header-title">
                <img src={fiaLogo} className="fia-logo" alt=""/>
                <h1 className="header-company">Friends In Action International</h1>
            </div>
            <div className="header-toggle">
                <button onChange={toggleDarkMode} className="btn btn-toggle">Light/Dark</button>
            </div>
        </header>
    )
}