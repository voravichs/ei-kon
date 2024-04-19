import { MdOutlineDeleteForever, MdOutlineSaveAlt } from "react-icons/md";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
/** 
 * Load Character Page
 */
export default function LoadChar() {

    const charList = [];

    Object.keys(localStorage).forEach(function(key){
        charList.push(JSON.parse(localStorage.getItem(key)))
     });

    const portrait = {
        initial: { scale: 1, opacity: 0.5 },
        animate: { scale: 1.1, opacity: 1 },
    }
    const bgPortrait = {
        initial: { scale: 1 },
        animate: { scale: 1.1 },
    }
    const words = {
        initial: { opacity: 0.75 },
        animate: { opacity: 1 },
    }

    return (
        <>
            <div className="flex flex-col gap-8 h-dvh pt-32 px-8 pb-8 relative">
                <h1 className="text-4xl font-noto-sans uppercase font-bold">CHARACTER SHEET A</h1>
                <div className="w-full flex gap-4">
                    {charList.map(character => {
                        return (
                            <Link to={`/charsheetA/${character.name}`} key={character.name} className="w-1/4 h-40">
                                <motion.div 
                                    initial="initial"
                                    animate="initial"
                                    whileHover="animate"
                                    className="text-white font-noto-sans text-xl slick-card h-40 relative border-primary group">
                                        <motion.div
                                            variants={bgPortrait}
                                            className="absolute top-0 left-0 h-48 w-40 slick-card outline-primary outline outline-offset-0 outline-2 p-2 bg-white"/>
                                        <motion.img 
                                            variants={portrait}
                                            src={character.job.img}
                                            className="absolute top-0 left-0 h-48 w-40 slick-card outline-primary outline outline-offset-0 outline-2 p-2 bg-white"/>
                                        <motion.div className="w-full flex justify-end p-4 bg-primary rounded-tl-3xl">
                                            <motion.p variants={words}>{character.name}</motion.p>
                                        </motion.div>
                                        <div className="w-full flex justify-end p-4 text-black text-base">Chapter {character.chapter} | Level {character.level}</div>
                                        <div className="w-full flex gap-2 justify-end px-4 text-black text-3xl">
                                            <MdOutlineSaveAlt className=" hover:animate-bounce"/>
                                            <MdOutlineDeleteForever className=" hover:animate-bounce"/>
                                        </div>
                                </motion.div>
                            </Link>
                            
                        )
                    })}     
                </div>
                <h1 className="mt-8 text-4xl font-noto-sans uppercase font-bold">CHARACTER SHEET B</h1>
                <div className="w-full flex gap-4">
                    {charList.map(character => {
                        return (
                            <Link to={`/charsheetB/${character.name}`} key={character.name} className="w-1/4 h-40">
                                <motion.div 
                                    initial="initial"
                                    animate="initial"
                                    whileHover="animate"
                                    className="text-white font-noto-sans text-xl slick-card h-40 relative border-primary group">
                                        <motion.div
                                            variants={bgPortrait}
                                            className="absolute top-0 left-0 h-48 w-40 rounded-tl-3xl rounded-br-3xl outline-primary outline outline-offset-0 outline-2 p-2 bg-white"/>
                                        <motion.img 
                                            variants={portrait}
                                            src={character.job.img}
                                            className="absolute top-0 left-0 h-48 w-40 rounded-tl-3xl rounded-br-3xl outline-primary outline outline-offset-0 outline-2 p-2 bg-white"/>
                                        <motion.div className="w-full flex justify-end p-4 bg-primary rounded-tl-3xl">
                                            <motion.p variants={words}>{character.name}</motion.p>
                                        </motion.div>
                                        <div className="w-full flex justify-end p-4 text-black text-base">Chapter {character.chapter} | Level {character.level}</div>
                                        <div className="w-full flex gap-2 justify-end px-4 text-black text-3xl">
                                            <MdOutlineSaveAlt className=" hover:animate-bounce"/>
                                            <MdOutlineDeleteForever className=" hover:animate-bounce"/>
                                        </div>
                                </motion.div>
                            </Link>
                            
                        )
                    })}     
                </div>
            </div>
            
        </>
    )
}