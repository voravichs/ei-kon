import classes from "../../data/classes/baseClass";

import { GiEvilEyes, GiRosaShield, GiRustySword, GiWingfoot } from "react-icons/gi";
import { FaArrowCircleRight } from "react-icons/fa";

import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useState } from "react";

/**
 * Job Selection Page
 */
export default function Jobs() {
    // Destrucure classes
    const { stalwart, vagabond, mendicant, wright } = classes;
    let bastion, demonslayer, colossus, knave;
    [bastion, demonslayer, colossus, knave] = stalwart.jobs;

    let [searchParams] = useSearchParams();
    const className = searchParams.get("class");

    const [jobSelected, setJobSelected] = useState("");
    const [selected, setSelected] = useState(false);

    const tooltip = {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <>
            <div className="absolute top-0 left-4 w-20 h-3/5 bg-primary" />
            {className  === "stalwart" &&
                <div className="flex h-dvh pt-32 px-8 pb-8">
                    <div className="w-1/5 h-full flex flex-col gap-2 font-bona-nova text-3xl">
                        <motion.div
                            whileHover={{ x: 25 }}
                            transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}
                            onClick={() => {
                                setJobSelected(bastion)
                                setSelected(true)
                            }}
                            className="slick-card py-2 px-8 z-10 border-l-[24px] border-red-600 bg-rose-600 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiRosaShield className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Bastion</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}
                            onClick={() => {
                                setJobSelected(demonslayer)
                                setSelected(true)
                            }}
                            className="slick-card py-2 px-8 z-10 border-l-[24px] border-red-600 bg-rose-700 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiRustySword className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Demon Slayer</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}
                            onClick={() => {
                                setJobSelected(colossus)
                                setSelected(true)
                            }}
                            className="slick-card py-2 px-8 z-10 border-l-[24px] border-red-600 bg-rose-800 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiWingfoot className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Colossus</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}
                            onClick={() => {
                                setJobSelected(knave)
                                setSelected(true)
                            }}
                            className="slick-card py-2 px-8 z-10 border-l-[24px] border-red-600 bg-rose-900 flex-center gap-4 drop-shadow cursor-pointer">
                            <GiEvilEyes className="text-white text-7xl" />
                            <p className="uppercase text-white font-bold">Knave</p>
                        </motion.div>
                    </div>
                    <motion.div
                        className="w-2/5">
                        {selected &&
                            <div className="flex flex-col gap-8">
                                <div className="font-bona-nova flex-center flex-col slick-card border-red-400 bg-red-600 border-b-[12px] mx-auto p-2 px-24 text-white">
                                    <p className="text-4xl font-bold uppercase">{jobSelected.jobName}</p>
                                    <p className="text-2xl italic">{jobSelected.title}</p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="w-full flex-center">
                                    <motion.img
                                        animate={{ scale: [1, 1.02, 1] }}
                                        transition={{
                                            ease: "linear",
                                            duration: 2,
                                            times: [0, 0.5, 1],
                                            repeat: Infinity
                                        }}
                                        src={jobSelected.img} className="w-3/5" />
                                </motion.div>
                            </div>
                        }
                    </motion.div>
                    <div className="w-2/5 h-full">
                        {selected &&
                            <div className="h-full flex flex-col gap-8 font-noto-sans relative">
                                <div className="italic">
                                    {jobSelected.desc}
                                </div>
                                <p className="text-3xl font-bold text-red-600 text-center">Class Traits</p>
                                <div className="flex flex-col gap-2">
                                    {jobSelected.traits.map(trait => {
                                        return (
                                            <div key={trait.name}>
                                                {trait.chapter == 1 &&
                                                    <motion.div
                                                        initial="initial"
                                                        animate="initial"
                                                        whileHover="animate"
                                                        className="bg-red-600 text-white slick-card p-4 relative cursor-pointer">
                                                        <p className="font-bold text-2xl flex-center gap-4">{trait.name}</p>
                                                        <motion.span
                                                            variants={tooltip}
                                                            transition={{ duration: 0.1, ease: "easeIn" }}
                                                            className="absolute z-10 w-96 bottom-16 -left-6 scale-0 rounded bg-gray-700 p-2 text-sm font-noto-sans text-white">
                                                            <p className="font-bold">{trait.name}</p>
                                                            <p>{trait.desc}</p>
                                                        </motion.span>
                                                    </motion.div>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="absolute bottom-0 right-0 bg-white rounded-full flex flex-col items-center">
                                    <p className="opacity-50 uppercase">select abilities</p>
                                    <Link>

                                    </Link>
                                    <motion.div
                                        animate={{ x: [-5, 10, -5] }}
                                        transition={{
                                            ease: "linear",
                                            duration: 1,
                                            times: [0, 0.5, 1],
                                            repeat: Infinity
                                        }}>
                                        <Link 
                                            to={'/charcreate/abilities'}
                                            state={{
                                                job: JSON.parse(JSON.stringify(jobSelected)),
                                                className: className
                                            }}>
                                                <FaArrowCircleRight className="text-6xl text-red-600 cursor-pointer" />
                                        </Link>

                                    </motion.div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            }
        </>
    )
}