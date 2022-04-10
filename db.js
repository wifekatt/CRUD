const mongoose = require ('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/DBvote' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => {
  console.log("connected to mongodb");
})
.catch((err) => {
  console.log("failed to connect to MongoDB", err);
});

 module.exports = mongoose;
