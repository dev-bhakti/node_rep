const express = require('express')
const db = require('../models')
const accountRouters = express.Router()

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
})

module.exports = accountRouters;
