import mongoose from "mongoose";

const connection={};

async function Connect(){
  if(connection.isConnected){
    return;
  }
  const db = await mongoose.connect(process.env.DATABASE_URL)

  connection.isConnected= db.connections[0].readyState;
}

export default Connect;