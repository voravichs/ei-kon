import classes from "../data/classes/baseClass"
import { GiAxeSword, GiBandit, GiHealingShield, GiCrescentStaff } from "react-icons/gi";
/**
 * Character Creation Page
 */
export default function CharCreate() {
    // Destrucure classes
    const { stalwart, vagabond, mendicant, wright } = classes;
    const stalwartTraits = Object.keys(stalwart.traits).map(key => stalwart.traits[key]);
    let bastion, demonslayer, colossus, knave;
    [bastion, demonslayer, colossus, knave] = stalwart.jobs;

    return (
        <div className="flex ">
            <div className="w-1/2 flex flex-col gap-8 font-bona-nova text-5xl">
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
            <div className="w-2/3"></div>
        </div>
    )
}