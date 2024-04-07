import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion"

import Navbar from '../components/Navbar'

/**
 * Layout for every page except Home
 */
export default function Layout() {
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}>
            <Navbar />
            <div className="flex flex-col w-full">
                <Outlet />
            </div>
        </motion.div>

    );
}

