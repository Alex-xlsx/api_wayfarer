const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  image: String,
  posts: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'BlogPost'
      }
  ]
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
