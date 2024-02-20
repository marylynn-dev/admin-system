const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//create express app
const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//route handlers
const studentRoutes = require('./routes/student')
const guardianRoutes = require('./routes/guardian')
const personRoutes = require('./routes/person')
const imgRoutes = require('./routes/images')
const emergencyContactRoutes = require('./routes/emergency-contact')

app.use('/student', studentRoutes)
app.use('/guardian', guardianRoutes)
app.use('/person', personRoutes)
app.use('/image', imgRoutes)
app.use('/emergency-contact', emergencyContactRoutes)

//environment configuration
require('dotenv').config()

//database connection
require('./helpers/mongo-connection')

//server listening
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))