import connection, { startTransaction } from "../utils/connect.js";

class Counters {
  collection;

  constructor() {}

  async connect() {
    try {
      const result = await connection("counters");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getID() {
    const session = await startTransaction();
    try {
      const connection = await this.connect();
      const counterDoc = await connection.findOneAndUpdate(
        { _id: `${this.collection}Id` },
        { $inc: { sequence_value: 1 } },
        { session, returnOriginal: false, upsert: true }
      );
      const newId = counterDoc.value.sequence_value + 1;
      return { id: newId, session: session };
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }
}
export { Counters };
