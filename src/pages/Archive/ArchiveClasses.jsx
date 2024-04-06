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
        <div className="h-dvh bg-card-accent p-8 pb-32 flex gap-8">
            <div className="w-full h-1/4 flex gap-8 font-bona-nova text-4xl">
                <div className="w-1/4 slick-card border-b-[24px] border-red-400 bg-red-600 flex-center gap-4">
                    <GiAxeSword className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Stalwart</p>
                </div>
                <div className="w-1/4 slick-card border-b-[24px] border-yellow-300 bg-yellow-500 flex-center gap-4">
                    <GiBandit className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Vagabond</p>
                </div>
                <div className="w-1/4 slick-card border-b-[24px] border-lime-300 bg-lime-500 flex-center gap-4">
                    <GiHealingShield className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Mendicant</p>
                </div>
                <div className="w-1/4 slick-card border-b-[24px] border-blue-300 bg-blue-500 flex-center gap-4">
                    <GiCrescentStaff className="text-white text-7xl"/>
                    <p className="uppercase text-white font-bold">Mendicant</p>
                </div>
            </div>
        </div>
    )
}