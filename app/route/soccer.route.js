module.exports = function (app) {
    const soccers = require('../controller/soccer.controller.js');

    // Create a new Soccer
    app.post('/api/soccers', soccers.create);

    // Retrieve all Soccer
    app.get('/api/soccers', soccers.findAll);

    // Retrieve a single soccer by Id
    app.get('/api/soccers/:id', soccers.findById);

    // Update a Soccers with Id
    app.put('/api/soccers', soccers.update);

    // Delete a Soccer with Id
    app.delete('/api/soccers/:id', soccers.delete);
}