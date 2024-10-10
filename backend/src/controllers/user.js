const db = require('../config/db');

exports.getMe = (req, res) => {
  const userId = req.user.userId;

  db.query('SELECT * FROM users WHERE userId = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];
    res.json({ user });
  });
};
