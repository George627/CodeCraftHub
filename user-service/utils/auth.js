const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = authenticate;
