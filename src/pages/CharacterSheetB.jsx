import { useParams } from 'react-router-dom';
export default function CharacterSheetB() {
    let { charname } = useParams();
    let charData = localStorage.getItem(charname);
    console.log(charData)
    return (
        <>
            <div className="flex flex-col gap-8 h-dvh pt-32 px-8 pb-8 relative">
                B
            </div>
        </>
    )
}