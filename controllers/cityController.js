const db = require('../models');

function handleError(res, err, status = 400, message = 'Something went wrong. Please try again.') {
  console.log('Error in cityController.js:', err);

  return res.status(status).json({ message });
}

const index = (req, res) => {
  db.City.find({}, (err, foundCities) => {
    if (err) handleError(res, err);

    res.json(foundCities);
  });
};

module.exports = {
  index
};
