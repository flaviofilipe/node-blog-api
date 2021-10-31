const jwt = require('jsonwebtoken');

const authenticatedMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    next()
    return
  }

  try {
    const { id, is_admin, email } = getToken(req)
    req.user = { id, is_admin, email };
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: error.message })
  }
}

const onlyAdminUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.sendStatus(401)
  }

  try {
    const { id, is_admin, email } = getToken(req)
    req.user = { id, is_admin, email }
    if (!is_admin) {
      return res.sendStatus(401)
    }
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: error.message })
  }
}

const getToken = req => {
  const token = req.headers.authorization.split(' ')[1];
  const tokenValidate = jwt.verify(token, process.env.SECRET);
  return tokenValidate
}

module.exports = {
  authenticatedMiddleware,
  onlyAdminUser
}