var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var client = new MongoClient(url);
var dbName = "db009";

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("customers");
    var obj = {name: "Company Inc", address: "Highway 37"};
    const result = await collection.insertOne(obj);
    console.log("1 document inserted");
    client.close();

}
main()