import colorSwapData from "../../styles/classColors";
import classData from "../../data/classes/baseClass";
import keywordData from "../../data/keywords";

import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from "react";

import { FaArrowCircleRight } from "react-icons/fa";

/**
 * Context Layout for Character Creation
 */
export default function CCLayout() {
    // Data
    const [classes] = useState(classData);
    const [keywords] = useState(keywordData);
    const [colorSwap] = useState(colorSwapData);

    // Stored Character Creation
    const [characterContext, setCharacterContext] = useState();
    const [jobContext, setJobContext] = useState();
    const [abilitiesContext, setAbilitiesContext] = useState([]);
    const [finalActive, setFinalActive] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='relative'>
            <Outlet context={{
                characterContext, setCharacterContext,  
                jobContext, setJobContext,
                abilitiesContext, setAbilitiesContext, 
                classes, keywords, colorSwap,
                finalActive, setFinalActive}}
            />    
            <div className={`absolute z-30 bottom-0 left-0 w-full ${colorSwap.bgAlt(characterContext)} h-16 flex-center gap-4 text-2xl text-white ring ring-white`}>
                {characterContext
                    ?
                    <div
                        onClick={() => navigate('/charcreate')} 
                        className={`w-64 rounded-full ${colorSwap.textAlt(characterContext)} bg-white py-2 px-8 text-center font-bold cursor-pointer flex-center gap-1`}
                    >
                        <p className="text-4xl">{characterContext.icon}</p>
                        <p className="first-letter:uppercase">{characterContext.class}</p>
                    </div>
                    : 
                    <div className={`rounded-full text-white py-2 px-8 text-center`}>
                        Class
                    </div>
                }
                <FaArrowCircleRight className="text-3xl"/>
                {jobContext
                    ?
                    <div 
                        onClick={() => navigate('/charcreate/jobs')}
                        className={`w-72 rounded-full ${colorSwap.textAlt(characterContext)} bg-white py-2 px-8 text-center font-bold cursor-pointer flex-center gap-1`}
                    >
                        <p className="text-4xl">{jobContext.icon}</p>
                        <p className="first-letter:uppercase">{jobContext.jobName}</p>
                    </div>
                    : 
                    <div className={`rounded-full text-white py-2 px-8 text-center`}>
                        Job
                    </div>
                }
                <FaArrowCircleRight className="text-3xl"/>
                {abilitiesContext.length !== 0
                    ?
                    <div 
                        onClick={() => navigate('/charcreate/abilities')}
                        className={`rounded-full ${colorSwap.textAlt(characterContext)} bg-white py-2 px-8 text-center font-bold first-letter:uppercase cursor-pointer`}
                    >
                        Abilities: {abilitiesContext.length}
                    </div>
                    : 
                    <div className={`rounded-full text-white py-2 px-8 text-center`}>
                        Abilities
                    </div>
                }
                <FaArrowCircleRight className="text-3xl"/>
                {finalActive
                    ?
                    <div 
                        onClick={() => navigate('/charcreate/finalize')}
                        className={`rounded-full ${colorSwap.textAlt(characterContext)} bg-white py-2 px-8 text-center font-bold first-letter:uppercase cursor-pointer`}
                    >
                        Guild Card
                    </div>
                    : 
                    <div className={`rounded-full text-white py-2 px-8 text-center`}>
                        Guild Card
                    </div>
                }
            </div>
        </div>
        
    );
}

