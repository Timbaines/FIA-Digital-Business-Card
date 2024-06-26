import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone, AiOutlineCloudDownload, AiOutlineClose } from 'react-icons/ai';


const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

        return (
            <div id="Contact" className="modal-container">
                    <button
                        onClick={toggleModal} className="btn btn-join">Join Our Team
                    </button>
                <AnimatePresence> {showModal && (
                    <motion.div className="modal-overlay" initial={{opacity: 0}} animate={{opacity: 1}}
                                exit={{opacity: 0}}>
                        <motion.div className="modal-inner" initial={{y: '100vh', opacity: 0}} animate={{
                            y: 0,
                            opacity: 1,
                            transition: {type: 'spring', stiffness: 100, damping: 20, duration: 0.5}
                        }} exit={{
                            y: '100vh',
                            opacity: 0,
                            transition: {type: 'spring', stiffness: 100, damping: 20, duration: 2}
                        }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2>Volunteer Apps</h2>
                                    <div className="modal-header-contact">
                                        <a href="tel:7175460208" className="modal-badge modal-phone"><AiOutlinePhone
                                            className="modal-icon"/>Call Us</a>
                                        <a href="mailto:FIA-USA@fiaintl.org" className="modal-badge modal-email"><AiOutlineMail
                                            className="modal-icon"/>Email</a>
                                    </div>
                                </div>
                                <p>Ready to begin your calling? If you have a heart to serve, we can find a job for you! You can download the the available forms below.</p>
                                <button className="btn btn-download"><AiOutlineCloudDownload className="download-icon"/>Volunteer
                                    App
                                </button>
                                <button className="btn btn-download"><AiOutlineCloudDownload className="download-icon"/>Travel
                                    App
                                </button>
                                <button className="btn btn-download"><AiOutlineCloudDownload className="download-icon"/>Skills Survey
                                </button>
                                <button className="btn btn-download"><AiOutlineCloudDownload className="download-icon"/>References
                                </button>
                            </div>
                            <div className="closeButton">
                                <button onClick={closeModal} className="btn btn-close-modal"><AiOutlineClose size={24}/>
                                </button>

                                {/*<a className='kindful-donate-btn'*/}
                                {/*   id='kindful-donate-btn-f48de2be-7a9c-4c5d-9fb0-3e40699172ec'>*/}
                                {/*    <button className="btn btn-support" id="btn-kindful">Support</button>*/}
                                {/*</a>*/}
                            </div>
                        </motion.div>
                    </motion.div>)} </AnimatePresence>
            </div>
        )
}

export default Modal;