const AccountController = async (req, res) => {
	try {
		const response = await db.Account.findAll()
		res.status(200).send({
			success: true,
			response
		})
	} catch (error) {
		res.status(400).send({
			error: 'Unexpected error occurred',
			msg: 'Please try again after some time'
		})
	}

}

module.exports = { AccountController };
