const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://*******/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}, 
	(err) => {
	if (!err) {
		console.log('Successful connection... ')
	} else {
		console.log('An error occured. Details: ' + err)
	} });

  
  module.exports = mongoose;
