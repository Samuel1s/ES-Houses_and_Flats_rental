const express = require("express");
const router = express.Router();
const Houses = require("../modal/House");
const Flats = require("../modal/Flat");

// To get all objects.
router.route('/houses').get((req, res) => {
  Houses.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).send("Request Failed"));
});

router.route('/flats').get((req, res) => {
  Flats.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).send("Request Failed"));
});

//To Create a new object.
router.route('/create_house').post((req, res) => {
  const { cidade, rua, bairro, uf, area, armario_emb, n_garagem, n_quarto, n_sala, n_suite, descricao } = req.body;
  const house = new Houses(req.body);
    house
      .save()
      .then((resp) => res.status(201).json(resp))
      .catch((err) => res.status(400).send("Failed to create house"));
});

router.route('/create_flat').post((req, res) => {
  const { cidade, rua, bairro, uf, area, armario_emb, n_garagem, n_quarto, n_sala, n_suite, n_sala_jantar, portaria_24h, valor_cond, descricao } = req.body;
  const flat = new Flats(req.body);
  flat
      .save()
      .then((resp) => res.status(201).json(resp))
      .catch((err) => res.status(400).send("Failed to create flat"));
})

//To delete a especfic object. 
router.route('/dl_house/:id').delete((req, res) => {
    Houses.findByIdAndDelete({_id: req.params.id}, (err,resp) =>{
        if(resp) res.json(err);
        else res.send('House dont removed');
    });
});

router.route('/dl_flat/:id').delete((req, res) => {
    Flats.findByIdAndDelete({_id: req.params.id}, (err,resp) =>{
        if(resp) res.json(err);
        else res.send('Flat dont removed');
    });
});

//To delete multiple post
/*router.route('/dl_posts').get((req, res) => {
    Posts.deleteMany({ _id: list, list: { $in: req.body.list} })
      .then((resp) => res.status(200).json(resp))
	    .catch((err) => res.status(400).json("Request Failed"));
})*/

//To Get a especfic object.
router.route('/get_house/:id').get((req, res) => {
    Houses.findById(req.params.id)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(400).send("House Request Failed"));
})

router.route('/get_flat/:id').get((req, res) => {
    Flats.findById(req.params.id)
      .then((resp) => res.status(200).json(resp))
      .catch((err) => res.status(400).send("Flat Request Failed"));
})

//To update a especfic object.
router.route('/up_house/:id').put((req, res, next) => { 
  Houses.findById(req.params.id, (err, resp) => {
    if (err) {
      return next(new Error('House Request Failed'));
    }
    else {
      resp.cidade = req.body.cidade;
      resp.rua = req.body.rua;
      resp.bairro = req.body.bairro;
      resp.uf = req.body.uf;
      resp.area = req.body.area;
      resp.n_suite = req.body.n_suite;
      resp.n_sala = req.body.n_sala;
      resp.n_quarto = req.body.n_quarto;
      resp.n_garagem = req.body.n_garagem;
      resp.armario_emb = req.body.armario_emb;
      resp.descricao = req.body.descricao;

      resp.save().then( resp => {
          res.status(200).json(resp);
      })
      .catch(err => {
          res.status(400).send("Error to update the object");
      });
    }
  });
});

router.route('/up_flat/:id').put((req, res, next) => {
  Flats.findById(req.params.id, (err, resp) => {
    if (err)
      return next(new Error('Flat Request Failed'));
    else {
      resp.cidade = req.body.cidade;
      resp.rua = req.body.rua;
      resp.bairro = req.body.bairro;
      resp.uf = req.body.uf;
      resp.area = req.body.area;
      resp.n_suite = req.body.n_suite;
      resp.n_sala = req.body.n_sala;
      resp.n_quarto = req.body.n_quarto;
      resp.n_garagem = req.body.n_garagem;
      resp.valor_cond = req.body.valor_cond;
      resp.armario_emb = req.body.armario_emb;
      resp.n_sala_jantar = req.body.n_sala_jantar;
      resp.portaria_24 = req.body.portaria_24;
      resp.descricao = req.body.descricao;

      resp.save().then( resp => {
          res.status(200).json(resp);
      })
      .catch(err => {
          res.status(400).send("Error to update the object");
      });
    }
  });
});


module.exports = router;