import connection from "../utils/connect.js";

class Bodegas {
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
}

export { Bodegas };
