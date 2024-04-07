import { FaExpandArrowsAlt } from "react-icons/fa";

import { useState } from "react";
import PropTypes from 'prop-types';

/**
 * Modal
 */
export default function Modal({ability}) {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <FaExpandArrowsAlt onClick={() => setShowModal(true)} className="absolute bottom-2 right-2 on hover:animate-ping"/>
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none cursor-default">
                        <div className="relative w-1/4 h-1/2 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex-center p-4 border-b border-solid rounded-t">
                                    <h3 className="text-2xl text-black text-center"> {ability.name} </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Blah
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-15 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

Modal.propTypes = {
    ability: PropTypes.object
};