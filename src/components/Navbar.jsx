import logowhite from "../assets/images/eikonlogowhite.png"
import { Link } from "react-router-dom";

/**
 * Navbar
 */
export default function Layout() {
    return (
        <div className='flex items-center px-8 h-24 bg-primary drop-shadow'>
            <Link to={""} className="h-24 px-2">
                <img src={logowhite} className="h-full" />
            </Link>
        </div>
    );
}