import { Bodegas } from "../collections/bodegas.js";

const agregarBodega = async (
  id,
  nombre,
  id_responsable,
  estado,
  created_by
) => {
  const bodega = new Bodegas();
  bodega._id = id;
  bodega.nombre = nombre;
  bodega.id_responsable = id_responsable;
  bodega.estado = estado;
  bodega.created_by = created_by;
  return await bodega.agregarBodegas();
};

export { agregarBodega };
