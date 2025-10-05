import express from 'express'
import { get } from '../utils/fetchFootballAPI.js'

const router = express.Router()

// GET /api/matches?next=10 or ?limit=50
router.get('/', async (req, res) => {
  try {
    const { next = 20, limit } = req.query
    const data = await get('/matches') // adjust endpoint per API plan

    let matches = data.matches || []
    if (limit) matches = matches.slice(0, Number(limit))
    else if (next) matches = matches.slice(0, Number(next))

    res.json({ matches })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch matches' })
  }
})

export default router
