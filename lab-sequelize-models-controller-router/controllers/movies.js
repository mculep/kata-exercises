const { INTEGER } = require('sequelize');
const { Movie } = require('../models');
const { layout } = require('../utils');

const list = async (req, res) => {
    const movies = await Movie.findAll();
    res.render('movies/list', {
        locals: {
            movies
        },
        ...layout
    });
};

const showForm = (req, res) => {
    res.render('movies/form', {
        ...layout
    });
};

const processForm = async (req, res) => {
    const {
        title,
        genre,
        year,
        rating
    } = req.body;
    const newMovie = await Movie.create({
        title,
        genre,
        year: parseInt(year, 10),
        rating: parseInt(rating, 10)
    });
    console.log(newMovie);
    res.redirect(req.baseUrl);
};

module.exports = {
    list,
    showForm,
    processForm
};


