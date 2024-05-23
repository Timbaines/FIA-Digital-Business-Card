import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineCloudDownload, AiOutlineClose } from 'react-icons/ai';


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
                        onClick={toggleModal} className="btn-support">Get Involved
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
                                <h2>Volunteer Applications</h2>
                                <p className="bio-content">Help us get to know your abilities and availability. If you
                                    have a heart to serve, we can find a job for you! </p>
                                <button className="btn-download"><AiOutlineCloudDownload className="download-icon"/>Volunteer
                                    App
                                </button>
                                <button className="btn-download"><AiOutlineCloudDownload className="download-icon"/>Travel
                                    App
                                </button>
                                <button className="btn-download"><AiOutlineCloudDownload className="download-icon"/>Skills Survey
                                </button>
                                <button className="btn-download"><AiOutlineCloudDownload className="download-icon"/>References
                                </button>
                            </div>
                            <div className="closeButton">
                                <button onClick={closeModal} className="btn-close-modal"><AiOutlineClose size={24}/>
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