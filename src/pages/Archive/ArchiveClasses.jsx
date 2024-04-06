import baseClass from "../../data/classes/baseClass"
import { FaSearch } from "react-icons/fa";
import { GiAxeSword, GiBandit, GiHealingShield, GiCrescentStaff } from "react-icons/gi";
import { useState } from "react";


/** 
 * Classes Page
 */
export default function ArchiveClasses() {
    const { stalwart } = baseClass;
    const stalwartTraits = Object.keys(stalwart.traits).map(key => stalwart.traits[key]);
    let bastion, demonslayer, colossus, knave;
    [bastion, demonslayer, colossus, knave] = stalwart.jobs;


    return (
        <div className="flex flex-col pt-32 pb-8 px-8 gap-8">
            <h1 className="flex-center text-5xl font-bona-nova font-bold tracking-widest">
                CLASSES
            </h1>
            <div className="w-full h-1/2 grid grid-cols-2 grid-rows-2 gap-8 font-bona-nova text-5xl">
                <div className="slick-card py-4 border-b-[24px] border-red-400 bg-red-600 flex-center gap-4 drop-shadow">
                    <GiAxeSword className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Stalwart</p>
                </div>
                <div className="slick-card border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4 drop-shadow">
                    <GiBandit className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Vagabond</p>
                </div>
                <div className="slick-card border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4 drop-shadow">
                    <GiHealingShield className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Mendicant</p>
                </div>
                <div className="slick-card border-b-[24px] border-blue-300 bg-blue-500 flex-center gap-4 drop-shadow">
                    <GiCrescentStaff className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Wright</p>
                </div>
            </div>
        </div>
    )
}