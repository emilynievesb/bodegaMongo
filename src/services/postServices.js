import { Bodegas } from "../collections/bodegas.js";
import { Counters } from "../collections/counters.js";
import { Inventarios } from "../collections/inventarios.js";
import { Productos } from "../collections/productos.js";

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

const agregarInventario = async (id_producto, created_at) => {
  const nuevoId = new Counters();
  nuevoId.collection = "inventarioId";
  const res = await nuevoId.getID();
  const { id, session } = res;
  const inventario = new Inventarios();
  inventario._id = id;
  inventario.id_producto = id_producto;
  inventario.created_at = created_at;
  session.endSession();
  return await inventario.agregarInventarioDefault();
};

const agregarProductos = async (nombre, descripcion, estado, created_by) => {
  const nuevoId = new Counters();
  nuevoId.collection = "productoId";
  const res = await nuevoId.getID();
  const { id, session } = res;
  const producto = new Productos();
  producto._id = id;
  producto.nombre = nombre;
  producto.descripcion = descripcion;
  producto.estado = estado;
  producto.created_by = created_by;
  producto.agregarProductos();
  const inventario = await agregarInventario(id, created_by);
  session.endSession();

  return await inventario;
};

export { agregarBodega, agregarProductos };
