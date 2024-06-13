import express from 'express'
import createUser from './routes/createUser.js'
import authLogin from './routes/login.js'
import cors from 'cors'

const app = express()
const port = 3333

app.use(express.json())
app.use(cors({ origin: '*' }));
app.use('/createuser', createUser)
app.use('/login', authLogin)



app.listen(port, console.log(`server on http://localhost:${port}`))