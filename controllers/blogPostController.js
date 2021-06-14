const db = require('../models');

function handleError(res, err, status = 400, message = 'Something went wrong. Please try again.') {
  console.log('Error in blogPostController.js:', err);

  return res.status(status).json({ message });
}

const index = (req, res) => {
  db.BlogPost.find({}, (err, foundBlogPosts) => {
    if (err) handleError(res, err);

    res.json(foundBlogPosts);
  });
};

const newestFirst = (req, res) => {
    db.BlogPost.find({}).sort({createdAt: -1}).exec((err, foundBlogPosts) => {
    if (err) handleError(res, err);

    res.json(foundBlogPosts);
  });
};

const create = (req, res) => {
    console.log(req.body);

    db.BlogPost.create(req.body, (err, newBlogPost) => {
        if (err) handleError(res, err);

        // Add the new article to the author that created it
        db.City.findByIdAndUpdate(
            req.body.city,
            { $push: { posts: newBlogPost._id } },
            { new: true },
            (err, updatedCity) => {
                if (err) handleError(res, err);
                
                console.log('updated city ==>', updatedCity);
                
                res.status(201).json(newBlogPost);
            }
        )
    })
}

const destroy = (req, res) => {
    console.log(req.body);

    db.BlogPost.findByIdAndDelete(req.params.id, (err, deletedBlogPost) => {
        if (err) handleError(res, err);

        db.City.findByIdAndUpdate(
            deletedBlogPost.city,
            { $pull: { posts:  deletedBlogPost._id } },
            (err) => {
                if (err) handleError(res, err);

                res.json(deletedBlogPost);
            }
        )
    })
}

const update = (req, res) => {
    console.log(req.body);

    db.BlogPost.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedBlogPost) => {
            if (err) handleError(res, err);

            res.json(updatedBlogPost);
        }
    );
}

module.exports = {
  index,
  create,
  newestFirst,
  destroy,
  update,
};
