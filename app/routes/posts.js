const express = require("express");
const router = express.Router();
const Posts = require("../modal/Post");

router.route('/posts').get((req, res) => {
	Posts.find()
	    .then((resp) => res.status(200).json(resp))
	    .catch((err) => res.status(400).json("Request Failed"));
});

//To Create a new post 
router.route('/create').post((req, res) => {
	const { name } = req.body;
	const post = new Posts({ name });
	post
	    .save()
	    .then((resp) => res.status(201).json(resp))
	    .catch((err) => res.status(400).json("Request Failed"));
})

//To delete a especfic post 
router.route('/dl_post/:id').get((req, res) => {
	console.log(req.params.id)
    Posts.findByIdAndRemove({_id: req.params.id}, (err,resp) =>{
        if(err) res.json(err);
        else res.json('Post successfully removed');
    });
});

//To delete multiple post
router.route('/dl_posts').get((req, res) => {
    Posts.deleteMany({ _id: list, list: { $in: req.body.list} })
        .then((resp) => res.status(200).json(resp))
	    .catch((err) => res.status(400).json("Request Failed"));
})

//To Get a especfic post 
router.route('/post/:id').get((req, res) => {
    Posts.findById(req.params.id)
        .then((resp) => res.status(200).json(resp))
	    .catch((err) => res.status(400).json("Request Failed"));
})

//To update a especfic post 
router.route('/up_post/:id').put((req, res) => {
  Posts.findById(req.params.id, (err, resp) => {
    if (post)
      return next(new Error('Error getting the todo!'));
    else {
      post.name = req.body.name;
      post.save().then( resp => {
          res.status(200).json(resp);
      })
      .catch(err => {
            res.status(400).send("Error when updating the todo");
      });
    }
  });
});


module.exports = router;