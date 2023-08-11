import { Bodegas } from "../collections/bodegas.js";

const ordenarBodegas = async () => {
  const bodegas = new Bodegas();
  return await bodegas.ordenarBodegas();
};

export { ordenarBodegas };
