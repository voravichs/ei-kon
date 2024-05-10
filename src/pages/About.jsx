import { GrGithub } from "react-icons/gr";
import iconlogo from "../assets/images/IconLogo.jpg"
import profile from "../assets/images/redpandapixels.png"

import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";

/** 
 * About Page
 */
export default function About() {
    return (
        <>
            <div className="pt-32 font-noto-sans flex flex-col items-center gap-8 px-24">
                <h1 className="text-4xl font-bona-nova font-bold">About</h1>
                <div className="w-full px-48 flex-center flex-col gap-8">
                    <p>This project was built as a final project from CIS 4120/5120 at the University of Pennsylvania as a solo project. It is intended to be a final working prototype and proof of concept for a ICON character builder that can encompass both the narrative play and tactical combat of the ICON system. This final prototype encompasses most of the Chapter 1 rules of tactical combat, without some of the experience and level-up mechanics, but includes the data for all the conditions and abilities alongside tags to parts of the rules.</p>
                    <p>This project is open source. Feel free to visit the Github below to browse the work performed so far. I will endeavour to continue building upon this app to completion so that ICON may have a useful character tracking tool! Feel free to also peruse the reflections below about this project, as they contain the key design insights I learned while developing this project as part of an human-computer interaction class.</p>
                </div>
                {/* Buttons */}
                <div className="flex-center gap-8 ">
                    <a href="https://github.com/voravichs/ei-kon">
                        <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-2xl text-white rounded-lg uppercase flex-center gap-3">
                            <GrGithub className="text-3xl"/> Github
                        </button>
                    </a>
                    <Link to={"/about/reflection"}>
                        <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-2xl text-white rounded-lg uppercase flex-center gap-3">
                            <GiNotebook className="text-3xl"/> Reflection
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pt-24 pb-16 font-noto-sans flex flex-col items-center gap-16 px-24">
                <h1 className="text-4xl font-bona-nova font-bold">Credits</h1>
                <div className="w-full h-80 flex-center gap-8">
                    <img src={iconlogo} className="h-full"/>
                    <div className="flex-center flex-col gap-2 w-2/5 h-full">
                        <h1 className="uppercase font-bold text-2xl">ICON TTRPG</h1>
                        <p>All images, text, and concepts for this app belong to Massif Press.</p>    
                        <p>Please support the official release!</p>
                        <a href="https://massif-press.itch.io/icon" className="text-primary hover:text-primary-hover hover:underline p-4">Website</a>
                    </div>
                </div>
                <div className="w-full h-64 flex-center gap-8">
                    <img src={profile} className="h-full"/>
                    <div className="flex-center flex-col gap-2 w-2/5 h-full">
                        <h1 className="uppercase font-bold text-2xl">App Developer</h1>
                        <h1 className="uppercase text-2xl">Voravich Silapachairueng</h1>
                        <p className="px-8">I am a recent graduate from the MCIT program at UPenn looking to work in web and game development. I love RPGs in general, whether they are turn-based JRPGs, text-based adventure RPGs, or tabletop RPGs. I am especially a fan of trying alternative systems with my tabletop group, and this is what lead me to enjoying both Lancer and ICON. </p>
                        <div className="flex-center">
                            <a href="https://github.com/voravichs" className="text-primary hover:text-primary-hover hover:underline p-4">Github</a>
                            <p>|</p>
                            <a href="https://voravichs.github.io/voravich-react-portfolio/" className="text-primary hover:text-primary-hover hover:underline p-4">Website</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}