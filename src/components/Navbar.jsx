
import logowhite from "../assets/images/eikonlogowhite.png"
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaQuestionCircle} from "react-icons/fa";
import { GiRuleBook } from "react-icons/gi";

/**
 * Navbar
 */
export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='fixed w-full flex z-20 px-8 h-20 bg-primary drop-shadow'>
            <div className="flex gap-6 items-center w-1/2">
                <div className="flex gap-4">
                    <div className="bg-white bg-opacity-0 p-2 rounded-full hover:bg-opacity-25 ">
                        <FaChevronLeft className="text-3xl text-white cursor-pointer" onClick={() => navigate(-1)}/>
                    </div>
                    
                    <div className="bg-white bg-opacity-0 p-2 rounded-full hover:bg-opacity-25 ">
                        <FaChevronRight className="text-3xl text-white cursor-pointer" onClick={() => navigate(1)}/>
                    </div>    
                </div>
                
                <Link to={"/archive"} className="group relative">
                    <GiRuleBook className="text-3xl text-white cursor-pointer"/>
                    <span className="absolute z-10 w-20 text-center -bottom-10 -left-6 opacity-0 rounded bg-gray-700 bg-opacity-85 p-2 text-sm font-noto-sans text-white group-hover:opacity-100 ">
                        <p className="font-bold">Archives</p>
                    </span>
                </Link>
                <Link to={""} className="h-20">
                    <img src={logowhite} className="h-full" />
                </Link>
            </div>
            <div className="w-1/2 flex gap-8 justify-end items-center">
                <div className="group relative cursor-pointer">
                    <FaQuestionCircle className="text-2xl text-white"/> 
                    <span className="absolute z-10 w-20 text-center -bottom-10 -left-6 opacity-0 rounded bg-gray-700 bg-opacity-85 p-2 text-sm font-noto-sans text-white group-hover:opacity-100 ">
                        <p className="font-bold">About</p>
                    </span>   
                </div>
            </div>
        </div>
    );
}