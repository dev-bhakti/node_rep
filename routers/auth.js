const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { sequelize } = require('../models')
const  db = require('../models')

const authRouters = express.Router()
// const { LoginController } = require('../controller/logincontroller')
// authRouters.post('/login', LoginController)

authRouters.post('/login', async (req, res) => {
	try {
		// const response = await db.User.findOne({ where: { name: req.body.name } })
		const user = await db.User.findOne({ where: { name: req.body.name } })

		if(!user){
			return res.status(401).send({ 
				error: "Authentication failed", 
				msg: "Invalid username or password" 
			})		
		}
		const isPasswordValid = (user.password === req.body.password);
		// if (response.password = req.body.password) {
		// 	const token = jwt.sign({ id: response.name }, 'qwertyuiop')
		// 	res.status(200).send({
		// 		auth: true,
		// 		token
		// 	})
		// } else {
		// 	res.status(403).send({
		// 		error: "Not authorized",
		// 		msg: "Password is incorrect"
		// 	})
		// }

	if (isPasswordValid) {
      // Use an environment variable for the secret
      const token = jwt.sign({ id: user.name }, process.env.DB_PASSWORD || '1234567890', {
        expiresIn: '1h' // Optional: add an expiration time
      });
      res.status(200).send({ auth: true, token });
    } else {
      res.status(401).send({ error: "Authentication failed", msg: "Invalid username or password" });
    }
  } catch (error) {
	console.error(error); // Log the error for debugging
    res.status(500).send({ 
		error: "Internal server error",
		 msg: "An unexpected error occurred" 
	})
		// res.status(400).send({
		// 	error: "Not authorized",
		// 	msg: "Unexpected error occurred while login"
		// })
	}
})

module.exports = authRouters;
