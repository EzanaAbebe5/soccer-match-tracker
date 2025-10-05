import React from 'react'
import { useFavorites } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'


export default function Favorites() {
    const { favorites, removeFavorite } = useFavorites()


    if (!favorites.length) return <div>No favorites yet.</div>


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Favorites</h1>
            <ul className="space-y-2">
                {favorites.map(team => (
                    <li key={team.id} className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                        <Link to={`/teams/${team.id}`} className="font-medium">{team.name}</Link>
                        <button onClick={() => removeFavorite(team.id)} className="text-sm text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}