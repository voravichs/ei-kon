import { useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import JobCard from "../../components/JobCard";

/**
 * Job Selection Page
 */
export default function Jobs() {
    // Contexts
    const {characterContext, jobContext, setJobContext, colorSwap} = useOutletContext();

    // States
    const [selected, setSelected] = useState(false);

    function handleSetJob(job) {
        const newChar = {
            "name": " ",
            "class": characterContext,
            "job": job,
            "abilities": [],
            "level": 0,
            "chapter": 1
        }
        localStorage.setItem("newChar", JSON.stringify(newChar));
        setJobContext(job)
        setSelected(true)
    }

    return (
        <>
            <div className="absolute top-0 left-4 w-20 h-3/5 bg-primary" />
            <div className="flex h-dvh pt-32 px-8 pb-24">
                {/* Job Selection */}
                <div className="w-1/4 h-full flex flex-col gap-2 font-bona-nova text-3xl">
                    {characterContext.jobs.map((job) => {
                        return (
                            <motion.div
                                key={job.jobName}
                                whileHover={{ x: 25 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 700,
                                    damping: 30
                                }}
                                onClick={() => {
                                    handleSetJob(job)
                                    setSelected(true)
                                }}
                                className={`slick-card py-4 px-8 z-10 border-l-[24px] ${colorSwap.bg(characterContext)} ${colorSwap.borderAccent(characterContext)} flex-center gap-4 drop-shadow cursor-pointer`}
                            >
                                <div className="text-white text-6xl">
                                    {job.icon}
                                </div>
                                <p className="uppercase text-white font-bold">{job.jobName  }</p>
                            </motion.div>
                        )
                    })}
                </div>
                {/* Selected Job */}
                <div className="w-3/4 flex-center">
                    <AnimatePresence mode="wait" initial={true}>
                        {/* Not Selected */}
                        {!selected &&
                            <motion.div
                                key="waiting"
                                animate={{ opacity: [0.25, 0.75, 0.25] }}
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    times: [0, 0.5, 1],
                                    repeat: Infinity
                                }}
                                className="h-1/4 font-bona-nova uppercase text-6xl text-center"
                            >
                                <p>Select a Job</p>
                            </motion.div>
                        }
                        {/* Selected */}
                        {selected &&
                            <JobCard selectedJob={jobContext}/>
                        }    
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}