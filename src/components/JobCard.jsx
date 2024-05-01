import LimitBreakModal from "./modals/LimitBreakModal";

import { FaArrowCircleRight } from "react-icons/fa";
import { GiShinyOmega } from "react-icons/gi";

import { motion } from "framer-motion"
import parse from 'html-react-parser';
import { Link, useOutletContext } from "react-router-dom";
/**
 * Class card component
 */
export default function JobCard({ selectedJob }) {
    // Contexts
    const { characterContext, colorSwap } = useOutletContext();

    // Styles & Animations
    const tooltip = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    }

    return (
        <motion.div
            key={selectedJob.jobName}
            initial={{ opacity: 0.25, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`slick-card w-full h-full bg-card-accent ${colorSwap.border(characterContext)} border-l-[36px] ml-8 mr-4 p-8 font-noto-sans flex gap-8 relative`}
        >
            {/* Name and Image */}
            <div className="w-1/2">
                {/* Title */}
                <div className="flex-center gap-4 h-1/6">
                    <div className={`flex-center ${colorSwap.text(characterContext)} text-8xl`}>{selectedJob.icon}</div>
                    <div className="flex-center flex-col">
                        <p className={`text-6xl ${colorSwap.text(characterContext)} font-bold uppercase`}>{selectedJob.jobName}</p>
                        <p className="text-2xl italic font-light">{selectedJob.title}</p>
                    </div>
                </div>
                {/* Image */}
                <div className="w-full flex-center h-4/5">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="p-8 flex-center">
                        <motion.img
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{
                                ease: "linear",
                                duration: 2,
                                times: [0, 0.5, 1],
                                repeat: Infinity
                            }}
                            src={selectedJob.img}
                            className="max-h-[500px]" />
                    </motion.div>
                </div>

            </div>

            {/* Info */}
            <div className="w-1/2 flex flex-col gap-6">
                {/* Description */}
                <div className="h-1/2 font-light flex-center flex-col gap-4">
                    {parse(selectedJob.desc)}
                </div>
                {/* Traits & LB */}
                <div className="h-1/2 flex gap-4">
                    <div className="w-1/2">
                        <p className={`text-3xl font-bold ${colorSwap.text(characterContext)} text-center mb-2`}>
                            Class Traits
                        </p>
                        <div className="flex flex-col gap-2">
                            {selectedJob.traits.map(trait => {
                                return (
                                    <div key={trait.name}>
                                        {trait.chapter == 1 &&
                                            <motion.div
                                                initial="initial"
                                                animate="initial"
                                                whileHover="animate"
                                                className={`${colorSwap.bg(characterContext)} text-white slick-card p-4 relative cursor-pointer flex-center`}
                                            >
                                                <p className="font-bold text-2xl flex-center gap-4">{trait.name}</p>
                                                <motion.span
                                                    variants={tooltip}
                                                    transition={{ duration: 0.1, ease: "easeIn" }}
                                                    className="absolute z-10 tooltip-2xl-t"
                                                >
                                                    <p className="font-bold">{trait.name}</p>
                                                    <p>{trait.desc}</p>
                                                </motion.span>
                                            </motion.div>
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p className={`text-3xl font-bold ${colorSwap.text(characterContext)} text-center mb-2 flex-center gap-2`}>
                            <GiShinyOmega /> Limit Break
                        </p>
                        <div className="flex flex-col h-3/5">
                            <div className={`border border-b-[24px] ${colorSwap.bg(characterContext)} ${colorSwap.borderAccent(characterContext)} text-white rounded-lg flex-center flex-col text-xl text-center border-card-accent relative h-full`}>
                                <p className="text-2xl font-bold">{selectedJob.limitbreak.name}</p>
                                <LimitBreakModal limitbreak={selectedJob.limitbreak} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Arrow */}
            <motion.div
                animate={{ x: [-5, 10, -5] }}
                transition={{
                    ease: "linear",
                    duration: 1,
                    times: [0, 0.5, 1],
                    repeat: Infinity
                }}
                className="absolute top-1/2 -right-8 bg-white rounded-full">
                <Link to={'/charcreate/abilities'}>
                    <FaArrowCircleRight
                        className={`text-6xl ${colorSwap.text(characterContext)} cursor-pointer`} />
                </Link>
            </motion.div>
        </motion.div>
    )
}