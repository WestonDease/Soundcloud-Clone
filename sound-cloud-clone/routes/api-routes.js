const Song = require('../models/Song');

module.exports = function (app) {

  app.get('/api/songs', function (req, res) {
    Song.find({})
      .then(function (data) {
        res.json(data);
        console.log('were in the api/routes getting the songs')
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/songs', function (req, res) {
    Song.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/songs/:id', function (req, res) {
    Song.findOneAndUpdate({ _id: req.body._id }, { completed: req.body.completed })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/songs/:id', function (req, res) {
    Song.findOneAndDelete(req.params.id)
      .then(data => res.json({ success: true }))
      .catch(err => res.json(err))
  });
}