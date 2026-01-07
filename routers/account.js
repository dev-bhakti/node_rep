const express = require('express')
// const { sequelize } = require('../models')
const db = require('../models')
// const AuthGuard = require('../middleware/authguard')
const accountRouters = express.Router()
// const { AccountController } = require('../controller/accountcontroller')

// accountRouters.get('/all-details', AuthGuard, AccountController)
accountRouters.get('/all-details', async (req, res) => {
	try {
		const response = await db.Account.findAll()
		res.status(200).send({
			success: true,
			response
		})
	} catch (error) {
		console.log('error', error)
		res.status(400).send({
			error: 'Unexpected error occurred',
			msg: 'Please try again after some time',
			details: error.message

		})
	}
	// try {
	// 	const response = await db.Account.findAll()
	// 	// Use 200 for successful retrieval of resources
	// 	res.status(200).send({ 
	// 		success: true,
	// 		response
	// 	})
	// } catch (error) {
	// 	// Log the error internally for debugging
	// 	console.error(error); 
	// 	// Use 500 for internal server errors rather than 400 Bad Request
	// 	res.status(500).send({ 
	// 		error: 'Internal server error occurred',
	// 		msg: 'Please try again after some time'
	// 	})
	// }

})

module.exports = accountRouters;
