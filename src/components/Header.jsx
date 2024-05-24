import fiaLogo from '/FIA_logo-150x150.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-title">
                <img src={fiaLogo} className="fia-logo" alt=""/>
                <h1 className="header-company">Friends In Action International</h1>
            </div>
            <div className="header-toggle">
                <button className="btn btn-toggle">Light/Dark</button>
            </div>
        </header>
    )
}