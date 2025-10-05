import React, { useEffect, useState } from 'react'
import { fetchMatches } from '../services/api'
import MatchCard from '../components/MatchCard'


export default function Home() {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)
        fetchMatches({ next: 10 })
            .then(data => setMatches(data.matches || []))
            .catch(err => setError(err.message || 'Failed to fetch'))
            .finally(() => setLoading(false))
        }, [])


    if (loading) return <div>Loading...</div>
    if (error) return <div className="text-red-500">{error}</div>


    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Upcoming Matches</h1>
            <div className="grid gap-4">
                {matches.map(m => <MatchCard key={m.id} match={m} />)}
            </div>
        </div>
    )
}