import { Bodegas } from "../collections/bodegas.js";
import { Counters } from "../collections/counters.js";

const agregarBodega = async (nombre, id_responsable, estado, created_by) => {
  const nuevoId = new Counters();
  nuevoId.collection = "bodegaId";
  const res = await nuevoId.getID();
  const { id, session } = res;
  const bodega = new Bodegas();
  bodega._id = id;
  bodega.nombre = nombre;
  bodega.id_responsable = id_responsable;
  bodega.estado = estado;
  bodega.created_by = created_by;
  session.endSession();
  return await bodega.agregarBodegas();
};

export { agregarBodega };
