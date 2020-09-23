const express = require("express");
const router = express.Router();
const Posts = require("../modal/Post");
const Houses = require("../modal/House");
const Flats = require("../modal/Flat");

// To get all objects.
router.route('/houses').get((req, res) => {
  Houses.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

router.route('/flats').get((req, res) => {
  Flats.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request Failed"));
});

//To Create a new object.
router.route('/create_house').post((req, res) => {
  const { rua, bairro, uf, area, armario_emb, n_suite, n_sala, n_quarto, n_garagem,  descricao } = req.body;
  const house = new Houses(req.body);
    house
      .save()
      .then((resp) => res.status(201).json(resp))
      .catch((err) => res.status(400).json(console.log(err)));
});

router.route('/create_flat').post((req, res) => {
  const { rua, bairro, uf, area, n_suite, n_sala, n_quarto, n_garagem, valor_cond, armario_emb, portaria_24, descricao } = req.body;
  const flat = new Flats(req.body);
  flat
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

router.route('/dl_house/:id').delete((req, res) => {
  console.log(req.params.id)
    Houses.findByIdAndDelete({_id: req.params.id}, (err,resp) =>{
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