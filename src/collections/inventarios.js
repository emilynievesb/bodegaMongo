import connection from "../utils/connect.js";

class Inventarios {
  _id;
  id_bodega;
  id_producto;
  cantidad;
  created_by;
  created_at;
  updated_at;
  deleted_at;

  constructor() {}

  async connect() {
    try {
      const result = await connection("inventarios");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async totalInventarios() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            //agrupar por id y total
            $group: {
              _id: "$id_producto",
              Total: { $sum: "$cantidad" },
            },
          },
          { $sort: { Total: -1 } },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async agregarInventarioDefault() {
    try {
      const date = new Date();
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        _id: this._id,
        id_bodega: 10,
        id_producto: this.id_producto,
        cantidad: 100,
        created_by: this.created_by,
        created_at: date,
        updated_at: null,
        deleted_at: null,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Inventarios };
