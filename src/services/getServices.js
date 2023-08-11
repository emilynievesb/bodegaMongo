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

export { ordenarBodegas, totalInventarios };
