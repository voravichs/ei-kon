import keywords from "../../data/keywords"
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

/** 
 * Keywords Page
 */
export default function ArchiveKeywords() {
    const { statusConditions, rules, combatGlossary } = keywords;
    const statusConditionsList = Object.keys(statusConditions).map(key => statusConditions[key]);
    const rulesList = Object.keys(rules).map(key => rules[key]);
    const combatGlossaryList = Object.keys(combatGlossary).map(key => combatGlossary[key]);

    const [conditionActive, setConditionActive] = useState(true);
    const [rulesActive, setRulesActive] = useState(false);
    const [combatActive, setCombatActive] = useState(false);

    return (
        <div className="h-dvh px-32 bg-card-accent py-8 flex flex-col gap-8">
            <h1 className="flex-center text-5xl font-bona-nova font-bold tracking-widest">
                KEYWORDS
            </h1>
            <div className="flex gap-8">
                {conditionActive
                    ? <div className="text-4xl font-bona-nova font-bold drop-shadow-glow-green pointer-events-none"> Conditions </div>
                    : <div onClick={() => {
                        setConditionActive(true);
                        setRulesActive(false);
                        setCombatActive(false);
                    }} className="text-4xl font-bona-nova cursor-pointer"> Conditions </div>
                }
                {rulesActive
                    ? <div className="text-4xl font-bona-nova font-bold drop-shadow-glow-green pointer-events-none"> Rules </div>
                    : <div onClick={() => {
                        setConditionActive(false);
                        setRulesActive(true);
                        setCombatActive(false);
                    }} className="text-4xl font-bona-nova cursor-pointer"> Rules </div>
                }
                {combatActive
                    ? <div className="text-4xl font-bona-nova font-bold drop-shadow-glow-green pointer-events-none"> Combat Glossary </div>
                    : <div onClick={() => {
                        setConditionActive(false);
                        setRulesActive(false);
                        setCombatActive(true);
                    }} className="text-4xl font-bona-nova cursor-pointer"> Combat Glossary </div>
                }
            </div>


            <div className="flex items-center gap-4">
                <FaSearch className="text-lg opacity-50" />
                <input className="border rounded-full text-xl py-2 px-8 drop-shadow-lg font-noto-sans"
                    placeholder={"search keywords"} />
            </div>
            {conditionActive &&
                <div className="flex gap-8 flex-wrap font-bona-nova">
                    {statusConditionsList.map(item => {
                        return (
                            <div
                                className="w-52 h-16 bg-secondary text-white rounded-lg p-4 group relative cursor-pointer"
                                key={item.name}
                            >
                                <p className="font-bold text-2xl text-center">{item.name}</p>
                                <span className="absolute z-10 w-60 bottom-[4.5rem] -left-4 scale-0 rounded bg-gray-800 p-2 text-sm font-noto-sans text-white group-hover:scale-100">
                                    <p className="font-bold">{item.name}</p>
                                    <p>{item.desc}</p>
                                </span>
                            </div>
                        );
                    })}
                </div>
            }
            {rulesActive &&
                <div className="flex gap-8 flex-wrap font-bona-nova">
                    {rulesList.map(item => {
                        return (
                            <div
                                className="w-52 h-16 bg-secondary text-white rounded-lg p-4 group relative cursor-pointer"
                                key={item.name}
                            >
                                <p className="font-bold text-2xl text-center">{item.name}</p>
                                <span className="absolute z-10 w-60 bottom-[4.5rem] -left-4 scale-0 rounded bg-gray-800 p-2 text-sm font-noto-sans text-white group-hover:scale-100">
                                    <p className="font-bold">{item.name}</p>
                                    <p>{item.desc}</p>
                                </span>
                            </div>
                        );
                    })}
                </div>
            }
            {combatActive &&
                <div className="flex gap-8 flex-wrap font-bona-nova">
                    {combatGlossaryList.map(item => {
                        return (
                            <div
                                className="w-52 h-16 bg-secondary text-white rounded-lg p-4 group relative cursor-pointer"
                                key={item.name}
                            >
                                <p className="font-bold text-xl text-center">{item.name}</p>
                                <span className="absolute z-10 w-60 bottom-[4.5rem] -left-4 scale-0 rounded bg-gray-800 p-2 text-sm font-noto-sans text-white group-hover:scale-100">
                                    <p className="font-bold">{item.name}</p>
                                    <p>{item.desc}</p>
                                </span>
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    )
}