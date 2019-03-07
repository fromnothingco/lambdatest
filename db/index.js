const mongoose = require('mongoose')
const db = mongoose.connect(process.env.ATLASURI, {useNewUrlParser: true})
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title:  String
})

const workouts = mongoose.model('workouts', workoutSchema)

module.exports = workouts