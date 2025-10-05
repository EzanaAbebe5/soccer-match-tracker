import React from "react";
import { NavLink} from 'react-router-dom';

export default function Navbar() {
const linkClass = ({ isActive }) =>
isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'


return (
    <nav className="bg-white shadow">
        <div className="container mx-auto p-4 flex items-center justify-between">
            <div className="text-xl font-bold">Soccer Match Tracker</div>
            <div className="space-x-4">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/matches" className={linkClass}>Matches</NavLink>
                <NavLink to="/favorites" className={linkClass}>Favorites</NavLink>
            </div>
        </div>
    </nav>
    )
}