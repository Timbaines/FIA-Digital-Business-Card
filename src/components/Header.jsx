import fiaLogo from '/FIA_logo-150x150.png';

export default function Header() {
    return (
        <header className="header">
            <img src={fiaLogo} className="fia-logo" alt=""/>
            <h1 className="bio-company">Friends In Action International</h1>
        </header>
    )
}