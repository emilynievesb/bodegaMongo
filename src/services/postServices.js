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

const nuevoInventario = async (
  id_bodega,
  id_producto,
  cantidad,
  created_by
) => {
  const inventario = new Inventarios();
  inventario.id_bodega = id_bodega;
  inventario.id_producto = id_producto;
  inventario.cantidad = cantidad;
  const inventarioEncontrado = await inventario.buscarInventario();
  if (inventarioEncontrado._id === undefined) {
    const nuevoId = new Counters();
    nuevoId.collection = "inventarioId";
    const res = await nuevoId.getID();
    const { id, session } = res;
    inventario._id = id;
    inventario.created_by = created_by;
    const result = await inventario.agregarInventario();
    session.endSession();
    return result;
  } else {
    const { _id } = inventarioEncontrado;
    inventario._id = _id;
    return await inventario.actualizarInventario();
  }
};

export { agregarBodega, agregarProductos, nuevoInventario };
