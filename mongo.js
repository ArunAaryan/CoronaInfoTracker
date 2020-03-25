const mongoose = require('mongoose');
const MainInfo = require('./models/main-info')
db = 'mongodb+srv://every:every123@cluster0-2je18.gcp.mongodb.net/PublicCause?retryWrites=true&w=majority';
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology : true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



  const newpost = new MainInfo({
    Confirmed:560,
    NewCases:25,
    Deaths:11,
    Recovered:19
  });
  // console.log(newpost._id)
  // console.log(typeof(newpost._id))
newpost.save().then(user=>{
   console.log("done")
})
 .catch(err=>console.log(err));