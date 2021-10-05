var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_managment"; 

MongoClient.connect(url,(err, client) => { 
    const db = client.db("user_managment");
    if (err) throw err;
    const query={user_name:'shan'} 
    const updatequery={$set:{user_name:'Aquib'}}

    db.collection("users").update(query,updatequery,(err, result) => { 
        if (err) throw err; 
        console.log(result.modifiedCount + " record(s) deleted"); 
        client.close(); 
    }); 
});