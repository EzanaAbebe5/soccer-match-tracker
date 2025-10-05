import express from 'express'
import cors from 'cors'
import matchesRouter from './routes/matches.js'
import teamsRouter from './routes/teams.js'

const app = express()

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/matches', matchesRouter)
app.use('/api/teams', teamsRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
