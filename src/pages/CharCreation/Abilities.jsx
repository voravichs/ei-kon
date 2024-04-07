import { useLocation } from "react-router-dom";
import Modal from "../../components/Modal"

/**
 * Abilities Page
 */
export default function Abilities() {
    const location = useLocation();
    const { job, className } = location.state;
    const ch1Abilities = job.abilities.ch1Abilities;

    const colorSwap = `${className === 'stalwart' ? "border-red-600" : "border-primary"}`;
    const colorSwapAccent = `${className === 'stalwart' ? "border-red-400" : "border-primary"}`;
    
    return (
        <>
            <div className="flex h-dvh pt-32 px-8 pb-8">
                <div className="flex flex-col gap-8 w-full">
                    <div className={`h-1/2 p-8 flex flex-col items-center slick-card bg-card-accent border-l-[48px] ${colorSwap}`}>
                        <div className=" font-bona-nova font-bold uppercase text-3xl mb-8">Select your Abilities (2)</div>
                        <div className="grid grid-cols-6 w-full h-full gap-4 font-noto-sans">
                            {ch1Abilities.map(ability => {
                                return (
                                    <div key={ability.name} className={`border border-b-[24px] bg-red-600 rounded-lg flex-center flex-col text-white text-xl text-center ${colorSwapAccent} cursor-pointer relative`}>
                                        <p>{ability.name}</p>
                                        <Modal ability={ability}/>
                                    </div>
                                )
                            })}    
                        </div>
                        
                    </div>
                    <div className="h-1/2">

                    </div>
                </div>
            </div>
        </>
    )
}