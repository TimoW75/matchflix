const mongoose = require("mongoose");

const Gebruikers = new mongoose.Schema({
    naam: {
        type: String,
        required: true,
    },
    leeftijd: {
        type: Number,
        required: true
    },
    geslacht: {
        type: String,
        required: true
    },
    emailadres: {
        type: String,
        required: true,
        unique: true
    },
    wachtwoord: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Gebruiker", Gebruikers);