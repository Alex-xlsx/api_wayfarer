const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  content: String,
  publishDate: Date,
  city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City'
  }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
