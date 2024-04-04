import { FaSearch, FaBook } from "react-icons/fa";
import { GiSwordsEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";

/** 
 * Compendium Page
 */
export default function ArchiveFront() {
    return (
        <div className="h-dvh px-32 bg-card-accent py-8 flex flex-col gap-8">
            <h1 className="flex-center text-7xl font-bona-nova font-bold tracking-widest">
                ARCHIVE
            </h1>
            <div className="flex-center gap-4">
                <FaSearch className="text-2xl opacity-50" />
                <input className="border rounded-full text-xl py-4 px-8 drop-shadow-lg font-noto-sans"
                    placeholder={"search keywords"} />
            </div>
            <div className="w-full flex justify-center gap-8">
                <Link to={"keywords"} className="bg-secondary text-white font-bold rounded-lg p-8 w-1/2 2xl:w-1/3 drop-shadow-lg flex items-center gap-4">
                    <FaBook className="text-4xl" />
                    <p className="font-bona-nova text-4xl">KEYWORDS</p>
                </Link>
                <Link to={"classes"} className="bg-secondary text-white font-bold rounded-lg p-8 w-1/2 2xl:w-1/3 drop-shadow-lg flex items-center gap-4">
                    <GiSwordsEmblem className="text-4xl" />
                    <p className="font-bona-nova text-4xl">CLASSES</p>
                </Link>
            </div>
        </div>
    )
}