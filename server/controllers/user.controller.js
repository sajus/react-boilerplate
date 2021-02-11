const getUsers = (req, res) => {
  const user = ['Tom', 'Darry', 'Chin'];
  res.send(user);
};

const getUsersDetails = (req, res) => {
  const id = req.params.uid;
  res.send(`Hello Tom! ${id}`);
};

module.exports = {
  getUsers,
  getUsersDetails,
};
