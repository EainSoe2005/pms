var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var client = new MongoClient(url);
var dbName= "db009";

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("customers");
    
        var obj = [
            { name: "John", address: "Highway 71" },
            { name: "Peter", address: "Lowstreet 4" },
            { name: "Amy", address: "Apple st 652" },
            { name: "Hannah", address: "Mountain 21" },
            { name: "Michael", address: "Valley 345" },
            { name: "Sandy", address: "Ocean blvd 2" },
            { name: "Betty", address: "Green Grass 1" },
            { name: "Richard", address: "Sky st 331" },
            { name: "Susan", address: "One way 98" },
            { name: "Vicky", address: "Yellow Garden 2" },
            { name: "Ben", address: "Park Lane 38" },
            { name: "William", address: "Central st 954" },
            { name: "Chuck", address: "Main Road 989" },
            { name: "Viola", address: "Sideway 1633" },
          ];

          const result = await collection.insertMany(obj);
          console.log("Number of document inserted" + result.insertedCount);
          client.close();
        }
        main();
    
