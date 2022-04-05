import mongoose from "mongoose";
mongoose
  .connect("mongodb://mongo/docker-node-mongo")
  .then((db) => console.log("Db is connected", db.connection.host))
  .catch((err) => console.log("Error connecting to db", err));
