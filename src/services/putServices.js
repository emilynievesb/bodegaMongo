import { Inventarios } from "../collections/inventarios.js";

const descontarInventario = async (id, cantidad) => {
  const inventario = new Inventarios();
  inventario._id = id;
  inventario.cantidad = cantidad;
  const desc = await inventario.descontarInventario();
  if (desc.modifiedCount !== 1) {
    throw new Error("Error al actualizar el inventario de la bodega de origen");
  }
};
export { descontarInventario };
