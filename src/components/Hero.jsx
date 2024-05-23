import bioLogo from '/andy-bachert-profile-avatar.jpg';
import { FaInstagram, FaLinkedin, FaFacebook, FaSnapchatSquare, FaYoutube } from "react-icons/fa";

export default function Hero() {

    return (
        <div className="container-hero">
            <img src={bioLogo} className="logo" alt=""/>
            <div className="bio-info">
                <h1 className="bio-name">Andy Bachert</h1>
                {/*<h3 className="bio-position">Chief Operating Officer</h3>*/}
                <div className="bio-social">
                    <a href="https://www.linkedin.com/in/andrew-bachert-68250479/" target="_blank"
                       rel="noopener noreferrer"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/abachert76" target="_blank"
                       rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="https://www.facebook.com/andy.bachert" target="_blank"
                       rel="noopener noreferrer"><FaFacebook/></a>
                    <a href="https://story.snapchat.com/s/abachert123" target="_blank"
                       rel="noopener noreferrer"><FaSnapchatSquare/></a>
                    <a href="https://www.youtube.com/channel/UCaNMokRDzPNlouU-UuL-W7Q" target="_blank"
                       rel="noopener noreferrer"><FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
}