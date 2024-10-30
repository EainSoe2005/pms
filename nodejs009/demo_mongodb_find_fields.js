var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var client = new MongoClient(url);
var dbName = "db009";

async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("customers");
    const result = await collection
    .find({},{projection:{_id:0, name:1,address:1 }})
    .toArray();
    console.log(result);
    client.close();
}
main();