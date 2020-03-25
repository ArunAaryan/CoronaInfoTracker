const express  = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')

db = process.env.MONGO_URI
const MainInfo = require('./models/main-info');
const StateWiseInfo = require('./models/statewiseinfo');
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology : true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
const app = express();
app.set('view engine','ejs');




app.get('/',async(req,res)=>{
    currentMainInfo = MainInfo.findOne({},null,{sort:{'_id':-1}},(err, data)=>{
        if(err)
            console.log(err)
        // console.log('atea'+currentMainInfo)
        
    }).then(data=> 
        StateWiseInfo.find({},null,{sort:{'State':1}},(err,statedata)=>{
            res.render('home',{data,statedata})
        }));

        // statedata = 

   
})
app.get('/isolist',(req,res)=>{
    res.render('map');
})     
    
app.set('views','./views')

app.listen(5000,()=>{
    console.log('listening')
})