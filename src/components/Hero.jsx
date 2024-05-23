import bioLogo from '/andy-bachert-profile-avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faSquareFacebook, faSquareInstagram, faSnapchatSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {

    return (
        <div className="container-hero">
            <img src={bioLogo} className="logo" alt=""/>
            <div className="bio-info">
                <h1 className="bio-name">Andy Bachert</h1>
                {/*<h3 className="bio-position">Chief Operating Officer</h3>*/}
                <div className="bio-social">
                    <a href="https://www.instagram.com/abachert76" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faSquareInstagram}/></i></a>
                    <a href="https://www.facebook.com/andy.bachert" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faSquareFacebook}/></i></a>
                    <a href="https://www.linkedin.com/in/andrew-bachert-68250479/" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faLinkedinIn}/></i></a>
                    <a href="mailto:andybachert@fiaintl.org" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faEnvelope}/></i></a>
                    <a href="https://story.snapchat.com/s/abachert123" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faSnapchatSquare}/></i></a>
                    <a href="https://www.youtube.com/channel/UCaNMokRDzPNlouU-UuL-W7Q" target="_blank"
                       rel="noopener noreferrer"><i><FontAwesomeIcon icon={faYoutube}/></i></a>
                </div>
            </div>
        </div>
    )
}