var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_managment"; 

MongoClient.connect(url,(err, client) => { 
    const db = client.db("user_managment");
    if (err) throw err; 
    db.collection("users").find().toArray((err, result) => { 
        if (err) throw err; 
        console.log(result); 
        client.close(); 
    }); 
});