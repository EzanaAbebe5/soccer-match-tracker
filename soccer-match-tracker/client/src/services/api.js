const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api'


export async function fetchMatches({ next = 20, limit } = {}) {
    const q = limit ? `?limit=${limit}` : `?next=${next}`
    const res = await fetch(`${BASE}/matches${q}`)
    if (!res.ok) throw new Error('Failed to fetch matches')
    return res.json()
}


export async function fetchTeam(id) {
    const res = await fetch(`${BASE}/teams/${id}`)
    if (!res.ok) throw new Error('Failed to fetch team')
    return res.json()
}