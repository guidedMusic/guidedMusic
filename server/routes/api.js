const router = require('express').Router();
const Track = require('../models/Track');
const Genre = require('../models/Genre');


router.get('/search/v2/track/where/:condition', (req, res, next) => {
  var condition = decodeURI(req.params.condition).trim().split(/\s/),
    key = `${condition[0]}_lower`,//search lowecase version
    operator = '$' + condition[1],
    map = condition.slice(2),
    map1 = map.map((v, i, a) => a[i + 1] == '\s' ? '' : v),
    search = map1.join(' ').toLowerCase().trim(),
    obj = {};
  obj[key] = {};
  obj[key][operator] = search;
  Track.find(obj)
    .exec((err, track) => {
      err ? res.json({ msg: null }) : res.json(track.constructor === [].constructor ? track : [track]);
    })
});
router.get('/search/v2/track/where/:condition/sort/:sort', (req, res, next) => {
  var condition = decodeURI(req.params.condition).trim().split(/\s/),
    sort = req.params.sort.trim().toLowerCase(),
    key = `${condition[0]}_lower`,//search lowecase version
    operator = '$' + condition[1],
    map = condition.slice(2),
    map1 = map.map((v, i, a) => a[i + 1] == '\s' ? '' : v),
    search = map1.join(' ').toLowerCase().trim(),
    obj = {};
  obj[key] = {};
  obj[key][operator] = search;
  Track.find(obj, null, { sort: sort })
    .exec((err, track) => {
      err ? res.json({ msg: null }) : res.json(track.constructor === [].constructor ? track : [track]);
    })
});

router.get('/genre', (req, res, next) => {
  Genre.find().exec((err, genre) => {
    res.json(genre[0].list)
  });
})
router.get('/search/:q', (req, res, next) => {
  var q = decodeURI(req.params.q);
  Track.find()
    .where('track_lower', q)
    .exec((err, track) => {
      res.json(track)
    });
})

router.post('/track', (req, res, next) => {
  var track = req.body;
  var newTrack = new Track({
    category: track.category,
    track: track.track,
    artist: track.artist,
    album: track.album,
    is_remix: track.is_remix || 'false',
    contributors: track.contributors,
    genre: track.genre,
    caption: track.caption,
    file: track.file,
    uploader: track.uploader
  });
  newTrack.save((err) => {
    res.json(err ? { msg: 'save failed' } : { msg: 'good' });
  })
})

module.exports = router;