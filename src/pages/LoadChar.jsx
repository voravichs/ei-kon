import { MdOutlineDeleteForever, MdOutlineSaveAlt } from "react-icons/md";
import { motion } from "framer-motion"
import { Link, useNavigate} from "react-router-dom";
/** 
 * Load Character Page
 */
export default function LoadChar() {

    const charList = [];

    Object.keys(localStorage).forEach(function(key){
        charList.push(JSON.parse(localStorage.getItem(key)))
     });

    const navigate = useNavigate();

    const portrait = {
        initial: { opacity: 0.5 },
        animate: { opacity: 1 },
    }
    const bgPortrait = {
        initial: { scale: 1 },
        animate: { scale: 1.2 },
    }
    const words = {
        initial: { opacity: 0.60 },
        animate: { opacity: 1 },
    }

    function handleDelete(character) {
        localStorage.removeItem(character)
        navigate("/load")
    }

    return (
        <>
            <div className="flex flex-col gap-8 h-dvh pt-32 px-8 pb-8 relative">
                <h1 className="text-4xl font-noto-sans uppercase font-bold">Registered Adventurers</h1>
                <div className="w-full flex gap-4">
                    {charList.map(character => {
                        return (
                            <motion.div 
                                key={character.name} 
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="text-white font-noto-sans text-xl slick-card relative border-primary group w-1/4 h-40 ">
                                    <Link to={`/charsheet/${character.name}`} className="absolute top-0 left-0 h-48 w-40">
                                        <motion.div
                                            style={{ originX: 0, originY: 0 }}
                                            variants={bgPortrait}
                                            className=" slick-card bg-white relative h-full outline-primary outline outline-offset-0 outline-2 flex-center"
                                        >
                                            <motion.img 
                                                style={{ originX: 0, originY: 0 }}
                                                variants={portrait}
                                                src={character.job.img}
                                                className="w-4/5"
                                            />    
                                        </motion.div>
                                    </Link>
                                    <Link to={`/charsheet/${character.name}`} className="w-full flex justify-end">
                                        <motion.div className="w-full flex justify-end p-4 bg-primary rounded-tl-3xl">
                                            <motion.p variants={words} className="text-2xl">{character.name}</motion.p>
                                        </motion.div>    
                                    </Link>
                                    
                                    <div className="w-full flex justify-end p-4 text-black text-base">Chapter {character.chapter} | Level {character.level}</div>
                                    <div className="w-full flex gap-2 justify-end px-4 text-black text-3xl">
                                        <MdOutlineSaveAlt className=" hover:animate-bounce cursor-pointer"/>
                                        <MdOutlineDeleteForever onClick={() => handleDelete(character.name)} className="hover:animate-bounce cursor-pointer"/>
                                    </div>
                            </motion.div>
                        )
                    })}     
                </div>
            </div>
            
        </>
    )
}