import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTeam } from '../services/api'


export default function TeamDetails() {
    const { id } = useParams()
    const [team, setTeam] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchTeam(id).then(data => {
            setTeam(data)
            setLoading(false)
        }).catch(() => setLoading(false))
    }, [id])


    if (loading) return <div>Loading...</div>
    if (!team) return <div>Team not found</div>


    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">{team.name}</h1>
            <div>Venue: {team.venue}</div>
            <div>Address: {team.address}</div>
            <div>
                <h2 className="text-xl mt-4">Squad</h2>
                <ul className="list-disc pl-5">
                    {team.squad?.map(p => (
                        <li key={p.id}>{p.name} — {p.position || 'N/A'}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}