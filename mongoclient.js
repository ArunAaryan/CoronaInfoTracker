var MongoClient = require('mongodb').MongoClient;
db = 'mongodb+srv://every:every123@cluster0-2je18.gcp.mongodb.net/PublicCause?retryWrites=true&w=majority';
MongoClient.connect(db, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");

    const newpost = {
        Confirmed:"560",
        NewCases:"25",
        Deaths:"10",
        Recovered:"19"
      }
    
      db.collection('maininfos').insertOne(newpost,(err,res)={
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    })
  
      