const express = require("express");

const _ = require("lodash");
const Joi = require("joi");
const router = express.Router();
const index = require("../index");
const Movie = index.Movie;
const movieSchema = index.movieSchema;
const cors = require('cors');

router.use(cors());

router.post("/", async (req, res) => {
    if (!req.body.title || req.body.title < 5 || !req.body.description) {
        //400 Bad Request
        res
            .status(400)
            .send("the text is required and it should take at least 5 characters");
        return;
    }
    let movie = new Movie(_.pick(req.body, [ "id","title", "description", "genre", "director","movieDisplays"]));

    try {
        movie = await movie.save();

        res.send(movie);
    } catch (err) {
        res.status(500).send();
        console.log(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const result = await Movie.deleteOne({ _id: req.params.id }); //method takes filter or query object

        if (result.deletedCount === 0) {
            res.status(404).send(result);
        } else {
            res.send(result);
        }
    } catch (err) {
        res.status(500).send();
        console.log(err);
    }
});
router.put("/:id", async (req, res) => {

    let result;
    try {

        result = await Movie.updateOne({
            _id: req.params.id
        }, {
           title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            director:req.body.director,
            movieDisplays: req.body.movieDisplays

            }

        );
        res.status(200).send(result);
    }

        catch (error) {
        res.status(500).send(result);
    }
});


router.get('/:id', async (req, res) => {

try{
    const movie = await Movie.findById(req.params.id).exec();
    console.log(movie, 'coś');
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);

}
catch(err){
    res.send(err)

}
});
router.get('/', async (req, res) => {

    try{
        const movie = await Movie.find();
        console.log(movie, 'coś');
        if (!movie) return res.status(404).send('The movie with the given ID was not found.');
        res.send(movie);

    }
    catch(err){
        res.send(err)

    }
});



module.exports = router;
