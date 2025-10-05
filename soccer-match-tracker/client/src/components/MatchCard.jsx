import React from 'react'
import { Link } from 'react-router-dom'


export default function MatchCard({ match }) {
    const { utcDate, homeTeam, awayTeam, score, status } = match
    const date = new Date(utcDate).toLocaleString()


    return (
        <div className="p-4 bg-white rounded shadow-sm flex justify-between items-center">
            <div>
                <div className="text-sm text-gray-500">{date}</div>
                <div className="flex items-center space-x-4 mt-1">
                    <Link to={`/teams/${homeTeam.id}`} className="font-medium">{homeTeam.name}</Link>
                    <span>vs</span>
                    <Link to={`/teams/${awayTeam.id}`} className="font-medium">{awayTeam.name}</Link>
                </div>
            </div>
        <div className="text-right">
            <div className="text-lg font-semibold">{status}</div>
            <div className="text-sm">{score.fullTime.home ?? '-'} - {score.fullTime.away ?? '-'}</div>
        </div>
        </div>
    )
}