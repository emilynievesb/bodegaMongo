import { Bodegas } from "../collections/bodegas.js";
import { Inventarios } from "../collections/inventarios.js";

const ordenarBodegas = async () => {
  const bodegas = new Bodegas();
  return await bodegas.ordenarBodegas();
};

const totalInventarios = async () => {
  const inventarios = new Inventarios();
  return await inventarios.totalInventarios();
};

const buscarInventario = async (id_bodega, id_producto) => {
  const inventarios = new Inventarios();
  inventarios.id_bodega = id_bodega;
  inventarios.id_producto = id_producto;
  return await inventarios.buscarInventario();
};

export { ordenarBodegas, totalInventarios, buscarInventario };
