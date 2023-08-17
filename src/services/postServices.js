import { Bodegas } from "../collections/bodegas.js";
import { Historiales } from "../collections/historiales.js";
import { Inventarios } from "../collections/inventarios.js";
import { Productos } from "../collections/productos.js";
import { buscarInventario } from "./getServices.js";
import { descontarInventario } from "./putServices.js";

const agregarBodega = async (nombre, id_responsable, estado, created_by) => {
  const bodega = new Bodegas();
  bodega.nombre = nombre;
  bodega.id_responsable = id_responsable;
  bodega.estado = estado;
  bodega.created_by = created_by;
  const result = await bodega.agregarBodegas();
  return await result;
};

const agregarInventario = async (id_producto, created_at) => {
  const inventario = new Inventarios();
  inventario.id_producto = id_producto;
  inventario.created_at = created_at;
  const result = await inventario.agregarInventarioDefault();
  return await result;
};

const agregarProductos = async (nombre, descripcion, estado, created_by) => {
  const producto = new Productos();
  producto.nombre = nombre;
  producto.descripcion = descripcion;
  producto.estado = estado;
  producto.created_by = created_by;
  const { insertedId } = await producto.agregarProductos();
  const inventario = await agregarInventario(insertedId, created_by);
  if (inventario.insertedId) {
    return `El producto ${insertedId} fue agregado correctamente a la bodega 10 con inventario ${inventario.insertedId}`;
  }
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
  if (inventarioEncontrado === undefined) {
    inventario.created_by = created_by;
    const result = await inventario.agregarInventario();
    return `El inventario ${result.insertedId} se agregó`;
  } else {
    const { _id } = inventarioEncontrado;
    inventario._id = _id;
    await inventario.actualizarInventario();
    return `El inventario ${_id} se actualizó`;
  }
};

const crearHistorial = async (
  cantidadTraslado,
  id_bodega_origen,
  id_bodega_destino,
  id_producto,
  created_by
) => {
  //? validación de ese producto en la bodega de origen
  const bodegaOrigen = await buscarInventario(id_bodega_origen, id_producto);
  console.log(bodegaOrigen);
  const { _id: idInventarioOrigen, cantidad: cantidadInventarioOrigen } =
    bodegaOrigen;
  if (bodegaOrigen === undefined) {
    throw new Error(
      "No existe inventario de ese producto en la bodega de origen"
    );
  }
  if (cantidadInventarioOrigen < cantidadTraslado) {
    throw new Error(
      "La cantidad a trasladar es mayor a la que hay en inventario"
    );
  }
  //? descontamos la cantidad, de la bodega de origen
  await descontarInventario(idInventarioOrigen, cantidadTraslado);
  //!HASTA AQUI YA SE DEBIÓ ACTUALIZAR EL INVENTARIO DE LA BODEGA DE ORIGEN */

  //*AHORA INICIAREMOS CON EL INVENTARIO DE LA BODEGA DESTINO */
  //!Esta función crea o actualiza un inventario
  const inventarioDestino = await nuevoInventario(
    id_bodega_destino,
    id_producto,
    cantidadTraslado,
    created_by
  );
  console.log(inventarioDestino);
  //!Creamos el registro de traslado
  const historial = new Historiales();
  historial.cantidad = cantidadTraslado;
  historial.id_bodega_origen = id_bodega_origen;
  historial.id_bodega_destino = id_bodega_destino;
  historial.id_inventario = idInventarioOrigen;
  historial.created_by = created_by;
  const response = await historial.agregarHistorial();
  if (response.insertedId) {
    return `Traslado numero ${response.insertedId} creado`;
  }
};

export { agregarBodega, agregarProductos, nuevoInventario, crearHistorial };
