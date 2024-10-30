var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var client = new MongoClient(url);
var dbName = "db009";

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("products");
    var obj =[
        { _id: 154, name: "Chocolate Heaven" },
        { _id: 155, name: "Tasty Lemon" },
        { _id: 156, name: "Vanilla Dream" },
      ];

      const result = await collection.insertMany(obj);
      console.log(result);
      client.close();
    }
    main(0);

    