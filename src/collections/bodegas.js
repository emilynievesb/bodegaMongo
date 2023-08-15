import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Bodegas {
  _id;
  nombre;
  id_responsable;
  estado;
  created_by;
  update_by;
  created_at;
  updated_at;
  deleted_at;
  constructor() {}

  async connect() {
    try {
      const result = await connection("bodegas");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async ordenarBodegas() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find().sort({ nombre: 1 }).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async agregarBodegas() {
    let session;
    try {
      const incremental = autoIncrementID("bodegas");
      const { id, session: newSession } = incremental;
      session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        _id: Number(id),
        nombre: String(this.nombre),
        id_responsable: Number(this.id_responsable),
        estado: this.estado,
        created_by: Number(this.created_by),
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      });
      await session.commitTransaction();
      return resultado;
    } catch (error) {
      throw error;
    } finally {
      if (session) {
        session.endSession();
      }
    }
  }
}

export { Bodegas };
