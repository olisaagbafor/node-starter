
const express = require('express');
const router = express.Router();

const genres = [
    {id: 1, name: "Genre 1"},
    {id: 2, name: "Genre 2"},
    {id: 3, name: "Genre 3"},
    {id: 4, name: "Genre 4"}
]

router.get('/', (req, res) => {
    res.json(genres);
})

router.get('/:id', (req, res) => {
    const genreId = parseInt(req.params.id);
    const genre = genres.find(genre => genre.id === genreId);
    if (!genre) return res.status(400).json("Genre Not Found");
    res.json(genre)
})

router.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).json({message: error.details[0].message});

    genres.push({
        id: genres.length + 1, 
        name: req.body.name
    })
    res.json(genres)
})

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().max(20).min(1).required()
    })

    return schema.validate(genre);
}

module.exports = router;
