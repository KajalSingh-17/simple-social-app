import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
console.log("CONNECTED");

process.exit(0);
