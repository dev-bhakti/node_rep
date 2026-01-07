const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const { sequelize } = require('./models')
const authRouters = require('./routers/auth')
const accountRouters = require('./routers/account')

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouters)
app.use('/api/account', accountRouters)

async function DbConnection() {
	try {
		await sequelize.authenticate()
		console.log('Connected to the Database')
		app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
	} catch (error) {
		console.log(error)
	}
}
DbConnection()

module.exports = app
