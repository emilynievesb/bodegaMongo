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
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        _id: this._id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        estado: this.estado,
        created_by: this.created_by,
        created_at: new Date(),
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Productos };
