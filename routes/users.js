const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Ivan Petrenko' },
  { id: 2, name: 'Olena Shevchenko' },
];

router.get('/', (req, res) => {
  res.render('users/index', { users });
});

router.get('/:userId', (req, res) => {
  const user = users.find(u => u.id == req.params.userId);
  if (user) {
    res.render('users/user', { user });
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
