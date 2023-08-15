import connection from "../utils/connect.js";

class Historiales {
  cantidad;
  id_producto;
  id_bodega_origen;
  id_bodega_destino;
  id_inventario;
  created_by;
  update_by;
  created_at;
  updated_at;
  deleted_at;
  constructor() {}
  async connect() {
    try {
      const result = await connection("historiales");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async buscarHistorial() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({
          id_bodega: this.id_bodega_origen,
          id_producto: this.id_producto,
        })
        .toArray();
      return resultado[0];
    } catch (error) {
      throw error;
    }
  }
  async agregarHistorial() {
    const date = new Date();
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        cantidad: this.cantidad,
        id_producto: this.id_producto,
        id_bodega_origen: this.id_bodega_origen,
        id_bodega_destino: this.id_bodega_destino,
        id_inventario: this.id_inventario,
        created_by: this.created_by,
        update_by: null,
        created_at: date,
        updated_at: null,
        deleted_at: null,
      });
      return resultado;
    } catch (error) {}
  }
}
export { Historiales };
