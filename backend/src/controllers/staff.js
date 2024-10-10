const db = require('../config/db');

// Get staff info (standard user)
exports.getStaffInfo = (req, res) => {
  const staffId = req.user.userId; // current logged-in user’s staff ID
  
  db.query('SELECT * FROM staff WHERE staffId = ?', [staffId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
  
    if (results.length === 0) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    const staff = results[0];
    res.json({ staff });
  });
};

// Get staff info in the same department (manager)
exports.getDepartmentStaff = (req, res) => {
  const staffId = req.user.userId; // current logged-in user’s staff ID

  db.query('SELECT depId FROM staff WHERE staffId = ?', [staffId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    const depId = results[0].depId; // find department of logged-in user

    db.query('SELECT * FROM staff WHERE depId = ?', [depId], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      res.json({ staff: results });
    });
  });
};

// Get all staff info (super admin)
exports.getAllStaff = (req, res) => {
  db.query('SELECT * FROM staff', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json({ staff: results });
  });
};