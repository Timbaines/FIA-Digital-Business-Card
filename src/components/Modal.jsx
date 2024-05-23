import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';


const tc = 'By clicking the "Submit" button below, I confirm that I have read, understood, and given my consent for the company and its affiliates, representatives, agents, third-party service providers, contractors, and/or appointed distribution/business partners (collectively referred to as "the Company") to collect, use, disclose, and/or process my personal data for the purpose of contacting me about products and services offered by the Company through marketing activities via all channels including but not limited to SMS, social media, in-app push notifications, phone calls, etc., and perusing my contact details which the Company has in its records from time to time and in accordance with the Company\'s Data Privacy Notice, which is available at [Privacy Notice URL]. ';

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
                        onClick={toggleModal} className="btn btn-support">Support
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
                        }}><h2 className="modal-content"> {tc} </h2>
                            <div className="closeButton">
                                <button onClick={closeModal} className="btn btn-close-modal"><AiOutlineClose size={24}/>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>)} </AnimatePresence>
            </div>
        )
    }

export default Modal;