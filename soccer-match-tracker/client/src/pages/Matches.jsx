import React, { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import { fetchMatches } from '../services/api'


export default function Matches() {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchMatches({ limit: 50 }).then(data => {
            setMatches(data.matches || [])
            setLoading(false)
        }).catch(() => setLoading(false))
    }, [])


    if (loading) return <div>Loading...</div>


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Matches</h1>
            <div className="space-y-3">
                {matches.map(m => <MatchCard key={m.id} match={m} />)}
            </div>
        </div>
    )
}