import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/wabab";
let connection = null;

export async function getConnection() {
    if (connection) return connection;
    connection = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return connection;
}