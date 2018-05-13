const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const TrackSchema = new Schema({
    track: {
        required: [true, 'track name is required'],
        type: String
    },
    category: {
        required: [true, 'a category is required'],
        type: String,
        enum: ['audio', 'video']
    },
    is_remix: {
        type: String,
        enum: ['true', 'false'],
        default: 'false'
    },
    'meta.popularity': {
        type: String,
        default:'1',
        match:/^\d{1,}$/
    },
    track_lower: {
        type: String,
        lowercase: true,
        unique: true
    },
    artist: {
        required: [true, 'artist name is required'],
        type: String
    },
    artist_lower: {
        type: String,
        lowercase: true
    },
    album: {
        type: String,
        default: ''
    },
    album_lower: {
        type: String,
        lowercase: true
    },
    contributors: {
        type: [String],
        default: ['']
    },
    contributors_lower: {
        type: [String]
    },
    genre: {
        type: String,
        default: ''
    },
    album_lower: {
        type: String,
        lowercase: true
    },
    file: {
        type: String,
        default: ''
    },
    caption: {
        type: String,
        default: ''
    },
    uploaded_on: {
        type: Date,
        default: Date.now()
    },
    uploader: {
        default: 'Guided Music',
        type: String
    },
    uploader_lower: {
        type: String,
        lowercase: true
    }
});



TrackSchema.pre('save', function (next) {
    var a = this;
    a.track_lower = a.track;
    a.artist_lower = a.artist;
    a.album_lower = a.album;
    a.uploader_lower = a.uploader;
    a.contributors_lower = a.contributors.map(v => { if (/\w{2,}/.test(v)) return v.toLowerCase().trim(); });
    return next();
});

const Track = mongoose.model('Track', TrackSchema);


module.exports = Track;