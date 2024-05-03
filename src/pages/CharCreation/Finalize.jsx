import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

const kinOptions = [
    { value: 'Thyrnn', label: 'Thyrnn' },
    { value: 'Trogg', label: 'Trogg' },
    { value: 'Beastfolk', label: 'Beastfolk' },
    { value: 'Xixo', label: 'Xixo' }
]

const cultureOptions = [
    { value: 'Yeokin', label: 'Yeokin' },
    { value: 'Islander', label: 'Islander' },
    { value: 'Leggio', label: 'Leggio' },
    { value: 'Churner', label: 'Churner' },
    { value: 'Chronicler', label: 'Chronicler' },
    { value: 'Guilder', label: 'Guilder' }
]

/**
 * Naming and finalizing Page
 */
export default function Finalize() {
    // Contexts
    const {characterContext, jobContext, abilitiesContext, setFinalActive, colorSwap} = useOutletContext();
    
    setFinalActive(true)
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [kin, setKin] = useState("");
    const [culture, setCulture] = useState("");

    function handleSubmit() {
        const charData = {
            "name": name,
            "kin": kin.value,
            "culture": culture.value,
            "class": characterContext,
            "job": jobContext,
            "abilities": abilitiesContext,
            "level": 0,
            "chapter": 1,
            "current": {
                "hp": characterContext.hp,
                "vigor": 0,
                "actions": 2,
                "move": characterContext.speed,
                "dash": 0,
                "dashedThisTurn": false,
                "wounds": []
            }
        }
        localStorage.setItem(name, JSON.stringify(charData));
    }

    return (
        <>
            <div className="h-dvh pt-32 px-32 pb-32">
                <div className={`slick-card bg-card-accent w-full h-full border-l-[48px] flex font-bona-nova ${colorSwap.border(characterContext)}`}>
                    {/*  Img */}
                    <div className="w-2/5 h-full">
                        <div className="w-full h-full flex-center">
                            <img src={jobContext.img} className={`w-2/3`} />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="w-3/5 p-16 flex flex-col gap-8 text-xl">
                        {/* Title */}
                        <div className={`font-bona-nova text-5xl ${colorSwap.text(characterContext)} font-bold flex-center`}>
                            Guild Registration Card
                        </div>
                        {/* Name Input */}
                        <div className="flex-center gap-4 text-2xl">
                            <p className="font-bona-nova font-bold">Name:</p>
                            <input 
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded text-xl py-2 px-4 drop-shadow font-bona-nova " placeholder={"enter name"} 
                            />    
                        </div>

                        {/* kin & culture */}
                        <div className="text-2xl flex justify-around">
                            <div className="flex gap-2 items-center">
                                <div className="font-bona-nova font-bold">Kin: </div>
                                <Select 
                                    options={kinOptions} 
                                    defaultValue={kin}
                                    onChange={setKin}
                                    className="drop-shadow font-bona-nova z-50"
                                /> 
                            </div>
                            <div className="text-2xl flex gap-4 items-center">
                                <div className="font-bona-nova font-bold">Culture: </div>
                                <Select 
                                    options={cultureOptions} 
                                    defaultValue={culture}
                                    onChange={setCulture}
                                    className="drop-shadow font-bona-nova z-50"
                                />  
                            </div>
                        </div>

                        {/* class & job */}
                        <div className="text-2xl flex justify-around">
                            <div className="flex gap-2">
                                <div className="font-bona-nova font-bold">Class: </div>
                                <div className="first-letter:uppercase font-bona-nova">{characterContext.class} </div>
                            </div>
                            <div className="text-2xl flex gap-4">
                                <div className="font-bona-nova font-bold">Job: </div>
                                <div className="first-letter:uppercase font-bona-nova ">{jobContext.jobName} </div>
                            </div>
                        </div>
                        
                        {/* Abilities */}
                        <div className="text-2xl flex gap-4 flex-col">
                            <div className="font-bona-nova font-bold flex-center">Selected Abilities: </div>
                            <div className="h-24 flex justify-center gap-4">
                                {abilitiesContext.map((ability, index) => {
                                    return (
                                        <div key={ability + index} className={`w-1/3 border border-b-[12px] ${colorSwap.bg(characterContext)} rounded-lg flex-center text-white text-2xl text-center ${colorSwap.borderAccent(characterContext)} relative font-bona-nova`}>
                                            <p>{ability.name}</p>
                                        </div>    
                                    )
                                })}    
                            </div>
                        </div>
                        <div className="flex-center items-end h-full">
                            <button 
                                onClick={() => {
                                    handleSubmit()
                                    navigate("/")
                                }}
                                className={`w-1/2 text-white p-4 rounded-lg text-2xl font-bona-nova ${colorSwap.bg(characterContext)}`}> 
                                    REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}