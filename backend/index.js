const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");
// const movies = require("./routes/movies")


const app = express();
app.use(express.json())

mongoose
    .connect("mongodb://localhost/cinema", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(express.json());

const movieSchema = new mongoose.Schema({
    id:Number,
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    description: {
        type: String,
        required: true,
        minlength: 5

    },

    genre: {
        type: String,
        enum: ['comedy', 'horror', 'thriller', 'romance', 'adventure', 'action']
    },
    director: String,
    movieDisplays: [
        {
            date:    { type: Date, required:true},
            seats:   { type: Number, max:30},
            numbersOfBookedSeats: [ { type: Number, max:30}]
        }
        ]

});



const Movie = mongoose.model("Movie", movieSchema);

module.exports.Movie = Movie;
module.exports.movieSchema = movieSchema;
const movies = require("./routes/movies");
app.use("/api/movies", movies);

const port = process.env.PORT || 3004;
app.listen(port, function() {
    console.log(`listening on port ${port}...`);
});
