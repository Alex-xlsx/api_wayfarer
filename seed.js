const db = require('./models');
const cityData = require('./initialData/cityData.json');
const blogData = require('./initialData/blogPostData.json');

// Delete Each Resource CITIES
db.City.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(result.deletedCount,'cities deleted');
  // Delete Each Resource BLOGPOSTS
  db.BlogPost.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(result.deletedCount,'posts deleted');
    // Create CITIES
    db.City.create(cityData.cities, (err, seededCities) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      console.log(seededCities.length, 'cities created successfully');
      // Create POSTS
      db.BlogPost.create(blogData.blogposts, (err, seededPosts) => {
        if (err) {
          console.log(err);
          process.exit();
        }
        console.log(seededPosts.length, 'posts created successfully');
        console.log('done!');
        process.exit();
      });
    });
  });
});