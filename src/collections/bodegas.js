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
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        _id: this._id,
        nombre: String(this.nombre),
        id_responsable: Number(this.id_responsable),
        estado: this.estado,
        created_by: Number(this.created_by),
        created_at: new Date(),
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Bodegas };
