var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_managment"; 

MongoClient.connect(url,(err, client) => { 
    const db = client.db("user_managment");
    if (err) throw err; 
    var myquery = { user_name: 'desa' }; 
    db.collection("users").deleteOne(myquery,(err, result) => { 
        if (err) throw err; 
        console.log(result.deletedCount + " record(s) deleted"); 
        client.close(); 
    }); 
});
