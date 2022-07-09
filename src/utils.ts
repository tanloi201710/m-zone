import { connect } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";
const connection = {
  isConnected: 0,
};

export const connectToDatabase = async () => {
  console.log("connection: ", connection.isConnected);
  if (connection.isConnected) {
    return;
  }
  const db = await connect(MONGO_URI);
  connection.isConnected = db.connections[0].readyState;
};
