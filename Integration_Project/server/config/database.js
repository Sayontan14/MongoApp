const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://saptashwachakra2:Fnoh3EnzKgIpQM5u@cluster0.dpwjcuv.mongodb.net/recruitment?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Error connecting to database: ', err));

module.exports = mongoose;
