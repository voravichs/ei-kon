import { MdOutlineDeleteForever, MdOutlineSaveAlt } from "react-icons/md";
import { FaFileImport, FaPlusCircle } from "react-icons/fa";

import { saveAs} from 'file-saver';
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
        handleReload()
    }

    function handleSaveFile(data) {
        var blob = new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"});
        saveAs(blob, data.name + ".json");
    }

    async function handleFileInput(e) {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            const res = JSON.parse(e.target.result);
            localStorage.setItem(res.name, JSON.stringify(res))
        };
    }

    function handleReload() {
        navigate("/load")
    }

    return (
        <>
            <div className="flex flex-col gap-8 h-dvh pt-32 px-8 pb-8 relative font-noto-sans">
                <h1 className="text-5xl font-noto-sans uppercase font-bold text-primary"> Character Roster</h1>
                {/* Chars */}
                <div className="w-full flex gap-12 flex-wrap">
                    {charList.map(character => {
                        return (
                            <motion.div 
                                key={character.name} 
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="text-white font-noto-sans text-xl slick-card relative border-primary group w-1/4 h-48 flex flex-wrap">
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
                                    
                                    <div className="w-full flex justify-end px-4 py-2 text-black text-base">Chapter {character.chapter} | Level {character.level}</div>
                                    <div className="w-full flex justify-end px-4 py-2 text-black text-base"> {character.kin} | {character.culture}</div>
                                    <div className="w-full flex gap-2 justify-end px-4 text-black text-3xl">
                                        <MdOutlineSaveAlt onClick={() => handleSaveFile(character)} className=" hover:animate-bounce cursor-pointer"/>
                                        <MdOutlineDeleteForever onClick={() => handleDelete(character.name)} className="hover:animate-bounce cursor-pointer"/>
                                    </div>
                            </motion.div>
                        )
                    })}     
                </div>
                <hr></hr>
                {/* Buttons */}
                <div className="flex-center gap-8 ">
                    <div className="flex-center">
                        <label htmlFor="dropzone-file" className="flex-center flex-col w-full rounded-lg cursor-pointer bg-primary hover:bg-primary-hover">
                            <div className="flex flex-col items-center justify-center px-8 py-4">
                                <p className="text-2xl text-white flex-center gap-3 uppercase"><FaFileImport/> Import File</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" 
                                onChange={(e) => {
                                    handleFileInput(e)
                                }}/>
                        </label>
                    </div> 
                    <Link to={"/charcreate"}>
                        <button className="px-8 py-4 bg-primary text-2xl text-white rounded-lg uppercase flex-center gap-3">
                            <FaPlusCircle/>New Character
                        </button>
                    </Link>
                    
                </div>
            </div>
            
        </>
    )
}