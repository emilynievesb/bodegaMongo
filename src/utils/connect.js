import { db } from "./config.js";
import { MongoClient } from "mongodb";

export async function connect() {
  try {
    const url = `mongodb+srv://${db.user}:${db.pass}@cluster0.rhimngz.mongodb.net/${db.dbname}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(url, options);
    const data = client.db();
    return data;
  } catch (error) {
    return { status: 500, message: error };
  }
}
export default async function connection(col) {
  try {
    const db = await connect();
    const res = db.collection(col);
    return res;
  } catch (error) {
    return { status: 500, message: error };
  }
}
const startTransaction = async () => {
  const db = await connect();
  const session = db.client.startSession();
  session.startTransaction();
  return session;
};

export { startTransaction };
