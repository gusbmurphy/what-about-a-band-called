import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/wabab";
let db = null;

export async function connectDB() {
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db();
    return db;
}