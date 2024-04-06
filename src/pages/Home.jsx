import logowhite from "../assets/images/eikonlogowhite.png"
import { FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import './bg.css'
/**
 * Home Page
 */
export default function Home() {

    return (
        <>
            <div className="h-screen flex-center flex-col bg-main bg-no-repeat bg-cover bg-center">
                {/* Logo */}
                <div className="h-2/5 flex-center">
                    <img src={logowhite} className="h-2/3 drop-shadow-2xl" />
                </div>

                {/* Menu Buttons */}
                <div className="h-3/5 w-1/2 2xl:w-1/3 flex-center flex-col gap-12 text-white text-5xl font-bold font-bona-nova">
                    <button className="uppercase flex-center gap-4 w-full group hover:drop-shadow-glow-green">
                        <div className="w-full flex flex-col">
                            <div className="flex-center gap-4 mr-12">
                                <motion.div
                                    animate={{ x: [-10, 10, -10] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 1,
                                        times: [0, 0, 5, 1],
                                        repeat: Infinity
                                    }}
                                >
                                    <FaHandPointRight className="opacity-0 group-hover:opacity-100" />
                                </motion.div>
                                <Link to={"charCreate"}>
                                    <p className="drop-shadow-4xl text-card-accent">New Character</p>
                                </Link>
                            </div>
                            <hr className="border-2 rounded" />
                        </div>
                    </button>
                    <button className="uppercase flex-center gap-4 w-full group hover:drop-shadow-glow-green">
                        <div className="w-full flex flex-col">
                            <div className="flex-center gap-4 mr-12">
                                <motion.div
                                    animate={{ x: [-10, 10, -10] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 1,
                                        times: [0, 0, 5, 1],
                                        repeat: Infinity
                                    }}
                                >
                                    <FaHandPointRight className="opacity-0 group-hover:opacity-100" />
                                </motion.div>
                                <Link to={"load"}>
                                    <p className="drop-shadow-4xl text-card-accent">Load Character</p>
                                </Link>
                            </div>
                            <hr className="border-2 rounded" />
                        </div>
                    </button>
                    <button className="uppercase flex-center gap-4 w-full group hover:drop-shadow-glow-green">
                        <div className="w-full flex flex-col">
                            <div className="flex-center gap-4 mr-12">
                                <motion.div
                                    animate={{ x: [-10, 10, -10] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 1,
                                        times: [0, 0, 5, 1],
                                        repeat: Infinity
                                    }}
                                >
                                    <FaHandPointRight className="opacity-0 group-hover:opacity-100" />
                                </motion.div>
                                <Link to={"archive"}>
                                    <p className="drop-shadow-4xl text-card-accent">Compendium</p>
                                </Link>
                            </div>
                            <hr className="border-2 rounded" />
                        </div>
                    </button>
                    <button className="uppercase flex-center gap-4 w-full group hover:drop-shadow-glow-green">
                        <div className="w-full flex flex-col">
                            <div className="flex-center gap-4 mr-16 ">
                                <motion.div
                                    animate={{ x: [-10, 10, -10] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 1,
                                        times: [0, 0, 5, 1],
                                        repeat: Infinity
                                    }}
                                >
                                    <FaHandPointRight className="opacity-0 group-hover:opacity-100" />
                                </motion.div>
                                <Link to={"about"}>
                                    <p className="drop-shadow-4xl text-card-accent">About</p>
                                </Link>
                            </div>
                            <hr className="border-2 rounded" />
                        </div>
                    </button>
                </div>

            </div >
        </>
    );
}