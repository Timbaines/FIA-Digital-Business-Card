import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';


const tc = 'curl --location \'https://app.kindful.com/api/v1/imports\' \\\n' +
    '--header \'Authorization: Token token="PASTE YOUR PRODUCTION TOKEN HERE"\' \\\n' +
    '--header \'Content-Type: application/json\' \\\n' +
    '--data-raw \'{\n' +
    '  "data_format": "contact",\n' +
    '  "data_type": "json",\n' +
    '  "match_by": {\n' +
    '    "group": "name"\n' +
    '  },\n' +
    '  "action_type": "create",\n' +
    '  "groups": ["Runner"], \n' +
    '  "data": [\n' +
    '    {\n' +
    '      "id": "t01", \n' +
    '      "first_name": "First", \n' +
    '      "last_name": "Last", \n' +
    '      "email": "emaill@email.com", \n' +
    '      "Runner": "yes"    }\n' +
    '  ] \n' +
    '}\'';

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