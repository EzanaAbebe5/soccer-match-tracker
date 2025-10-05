import fetch from 'cross-fetch'
import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 60 }) // cache responses for 60 seconds
const API_BASE = process.env.FOOTBALL_API_BASE || 'https://api.football-data.org/v4'
const API_KEY = process.env.FOOTBALL_API_KEY || ''

async function get(path) {
  const key = `fd:${path}`
  const cached = cache.get(key)
  if (cached) return cached

  const res = await fetch(API_BASE + path, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  if (!res.ok) throw new Error(`Football API returned ${res.status}`)
  const data = await res.json()
  cache.set(key, data)
  return data
}

export { get }
