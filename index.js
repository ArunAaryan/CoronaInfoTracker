const express  = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
var port = process.env.PORT || 5000;
db = process.env.MONGO_IRI //dev
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
app.use(express.urlencoded({ extended: true }));
app.set('views','./views')


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

app.get('/helper',(req,res)=>{
    if(req.query.key===""){
        StateWiseInfo.find({},null,{sort:{'State':1}},(err,statedata)=>{
            res.render('helperstate',{statedata});
        })
       
    }
    else{
        res.send('!');
    }
})

app.post('/helper',(req,res)=>{
    console.log(req.body)
    State = req.body.State;
    Confirmed = req.body.Confirmed;
    if(req.body.Deaths.length===0){
        Deaths="Not Updated"
    }else{

        Deaths = req.body.Deaths
    }

    StateWiseInfo.updateOne({State},{$set:{"Confirmed":Confirmed, "Deaths":Deaths}}).then(res.send("!updated"));

})
app.get('/helpermain',(req,res)=>{
    if(req.query.key===""){
        currentMainInfo = MainInfo.findOne({},null,{sort:{'_id':-1}},(err, data)=>{
            if(err)
                console.log(err)
            // console.log('atea'+currentMainInfo)
            res.render('helpermain',{data})
            
        })
    }else{
        res.send('!')
    }
})
app.post('/helpermain',(req,res)=>{
    console.log(req.body);
    const newpost = MainInfo({
        Confirmed:req.body.Confirmed,
        NewCases:req.body.NewCases,
        Deaths:req.body.Deaths,
        Recovered:req.body.Recovered
      })

      newpost.save().then(user=>{
        res.send('!updated');
}).catch(err=>console.log(err));

})



app.listen(port,()=>{
    console.log('listening')
})