var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managment";

MongoClient.connect(url,(err, client)=> {
  if (err) throw err;
  var myobj = [
    { user_id: "vb001", user_name: "joshua", mobile_bo:9654861260 },
    { user_id: "vb002", user_name: "enoch", mobile_bo:9654866320 },
    { user_id: "vb003", user_name: "shan" , mobile_bo:3254861260},
    { user_id: "vb004", user_name: "venkat", mobile_bo:7081861260 },
    { user_id: "vb005", user_name: "shan", mobile_bo:8692861260 },
    { user_id: "vb006", user_name: "iliyas", mobile_bo:8965488965 },
    { user_id: "vb007", user_name: "desa", mobile_bo:7898861260 },
  ];

  const db = client.db("user_managment");
  db.collection("users").insertMany(myobj,(err, result) => {
        if (err) throw err;
        console.log("Number of records inserted: " + result.insertedCount);
        client.close();
    });
});