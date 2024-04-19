import DiceModal from "./DiceModal";

import { TbHexagon2Filled } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";

/**
 * Modal
 */
export default function TwoActionModal({charData, showDiceModal, setShowDiceModal}) {
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <TbHexagon2Filled onClick={() => setShowModal(true)}/> 
            {/* Modal */}
            {showModal ? (
                <>
                    <div className="flex-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 top-56 outline-none focus:outline-none cursor-default">
                        <div className="relative w-1/3 h-2/3 z-50">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  text-base bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="p-4 border-b border-solid rounded-t text-black">
                                    <div className="grid grid-cols-4 items-center mb-2"> 
                                        <div></div>
                                        <div className="text-3xl flex-center gap-2 col-span-2 text-primary font-bold"> 
                                            <TbHexagon2Filled className="text-5xl"/> Actions 
                                        </div>
                                        {/* Close button */}
                                        <button
                                            className="text-red-500 text-4xl justify-self-end"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <IoIosCloseCircle/>
                                        </button>
                                    </div>
                                </div>
                                {/* body */}
                                <div className="p-4 flex items-center flex-col text-black rounded-b border-solid">
                                    <button onClick={() => {
                                        setShowModal(false)
                                        setShowDiceModal(true)
                                    }} 
                                        className="text-white px-8 py-2 bg-secondary text-2xl slick-card border-0"
                                    >
                                        Heavy Attack
                                    </button>
                                    <DiceModal 
                                        title={"Heavy Attack"} 
                                        dice={charData.class.damagedice} 
                                        fray={charData.class.fray}
                                        actions={2}
                                        showModal={showDiceModal}
                                        setShowModal={setShowDiceModal}/>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                    </div>
                </>
            ) : null}

        </>
    )
}