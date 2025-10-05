import express from 'express'
import { get } from '../utils/fetchFootballAPI.js'

const router = express.Router()

// GET /api/teams/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await get(`/teams/${id}`)
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch team' })
  }
})

export default router
