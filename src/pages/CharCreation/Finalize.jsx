import { useLocation } from "react-router-dom";
import { useState } from "react";
/**
 * Naming and finalizing Page
 */
export default function Finalize() {
    const location = useLocation();
    const { job, classSelected, abilities} = location.state;

    const [name, setName] = useState("");
    
    const colorSwapBorder = `${classSelected.class === 'stalwart' ? "border-red-600" : "border-primary"}`;
    const colorSwapAccent = `${classSelected.class === 'stalwart' ? "border-red-400" : "border-primary"}`;
    const colorSwapBg = `${classSelected.class === 'stalwart' ? "bg-red-600" : "border-primary"}`;

    function handleSubmit() {
        const charData = {
            "name": name,
            "class": classSelected,
            "job": job,
            "abilities": abilities,
            "level": 0,
            "chapter": 1
        }
        localStorage.setItem(name, JSON.stringify(charData));
    }

    return (
        <>
            <div className="h-dvh pt-32 px-32 pb-32">
                <div className={`slick-card bg-card-accent w-full h-full border-l-[48px] flex ont-bona-nova ${colorSwapBorder}`}>
                    <div className="w-2/5 h-full">
                        <div className="w-full h-full flex-center">
                            <img src={job.img} className={`w-2/3 border ${colorSwapBorder}`} />
                        </div>
                    </div>
                    <div className="w-3/5 p-16 flex flex-col gap-8 text-xl">
                        <div className="font-bona-nova text-4xl font-bold flex-center">
                            Guild Registration Card
                        </div>
                        <div className="flex items-center gap-4 text-2xl">
                            <p className="font-bona-nova font-bold">Name:</p>
                            <input 
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded text-xl py-2 px-4 drop-shadow font-noto-sans " placeholder={"enter name"} />    
                        </div>
                        <div className="text-2xl flex gap-4">
                            <span className="font-bona-nova font-bold">Class: </span>
                            <p className="first-letter:uppercase font-bona-nova">{classSelected.class} </p>
                        </div>
                        <div className="text-2xl flex gap-4">
                            <span className="font-bona-nova font-bold">Job: </span>
                            <p className="first-letter:uppercase font-bona-nova ">{job.jobName} </p>
                        </div>
                        <div className="text-2xl flex gap-4 flex-col">
                            <span className="font-bona-nova font-bold">Selected Abilities: </span>
                            <div className="h-24 flex justify-center gap-4">
                                {abilities.map(ability => {
                                    return (
                                        <div key={ability} className={`w-1/3 border border-b-[12px] bg-red-600 rounded-lg flex-center text-white text-2xl text-center ${colorSwapAccent} relative`}>
                                            <p>{ability.name}</p>
                                        </div>    
                                    )
                                })}    
                            </div>
                        </div>
                        <div className="flex-center items-end h-full">
                            <button 
                                onClick={() => handleSubmit()}
                                className={`w-1/2 text-white p-4 rounded-lg text-2xl font-noto-sans ${colorSwapBg}`}> 
                                    REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}