import autoIncrementID from "../utils/autoIncrement.js";
import connection from "../utils/connect.js";

class Productos {
  _id;
  nombre;
  descripcion;
  estado;
  created_by;

  constructor() {}
  async connect() {
    try {
      const result = await connection("productos");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregarProductos() {
    let session;
    try {
      const incremental = autoIncrementID("productos");
      const { id, session: newSession } = incremental;
      session = newSession;
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        _id: id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        estado: this.estado,
        created_by: this.created_by,
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

export { Productos };
