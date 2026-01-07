
	const jwt = require('jsonwebtoken')
	const AuthGuard = (req, res, next)=>	{
	try{
		const token = req.headers['authorization']
		if(!token){
    		return  res.status(401).send({
			error: 'You are not authporized',
			msg: 'Token is not valid'
			})
		}
	
		jwt.verify(token, 'qwertyuiop',(err, decode)=>{
		if(err){
			return  res.status(401).send({
			error: 'You are not authporized',
			msg: 'Verification failed'
			})
		}
		req.name = decode
		next()
	})

	}catch(error){	
		return  res.status(401).send({
			error: 'You are not authporized',
			msg: 'Verification failed'
			})	
		}	

	}
	module.export = AuthGuard

