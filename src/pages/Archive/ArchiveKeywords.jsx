import keywords from "../../data/keywords"
import { FaSearch } from "react-icons/fa";
/** 
 * Keywords Page
 */
export default function ArchiveKeywords() {
    const { statusConditions } = keywords;
    const statusConditionsList = Object.keys(statusConditions).map(key => statusConditions[key]);

    statusConditionsList.forEach(element => {
        console.log(element.name)
    });

    return (
        <div className="h-dvh px-32 bg-card-accent py-8 flex flex-col gap-8">
            <div className="text-4xl font-bona-nova font-bold"> Conditions </div>
            <div className="flex items-center gap-4">
                <FaSearch className="text-lg opacity-50" />
                <input className="border rounded-full text-xl py-2 px-8 drop-shadow-lg font-noto-sans"
                    placeholder={"search keywords"} />
            </div>
            <div className="flex gap-8 flex-wrap font-bona-nova text-2xl">
                {statusConditionsList.map(item => {
                    return (
                        <div
                            className="bg-secondary text-white font-bold rounded-lg p-4"
                            key={item.name}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
            

        </div>
    )
}