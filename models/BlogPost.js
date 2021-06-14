const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    content: String,
    // publishDate: Date,
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
  },
  { timestamps: true }
);

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
