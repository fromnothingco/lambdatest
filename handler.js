'use strict';
const Workout = require('./db')

module.exports.hello = async (event, context) => {
  console.log('1')
  try {
    const data = await Workout.find({})
    console.log('yo')
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'this is a test',
        data,
      }),
    };
  }catch(e) {
    console.log('here')
    return e
  }
};


module.exports.hellopost = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const newWorkout = new Workout({
    title: data.title
  })
  try {
    await newWorkout.save()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'this is a test',
        data: data,
      })
    }
  }catch(e) {
    return {
      statusCode: 404,
      body: JSextendsify({
        message: 'there was an issue',
        data: e,
      })
    }
  }
  
  
};
