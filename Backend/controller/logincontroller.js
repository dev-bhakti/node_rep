const LoginController = async (req, res) => {
	try {
		const response = await db.User.findOne({ where: { name: req.body.name } })
		if (response && response.password === req.body.password) {
			const token = jwt.sign({ id: response.name }, 'qwertyuiop')
			res.status(200).send({
				auth: true,
				token
			})
		} else {
			res.status(403).send({
				error: 'Not Authorized',
				msg: 'Password is incorrect'
			})
		}

	} catch (error) {
		res.status(400).send({
			error: 'Not Authorized',
			msg: 'Unexpected error occurred while login'

		})
	}

}
module.exports = { LoginController };
