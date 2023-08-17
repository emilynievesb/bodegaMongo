import {
  agregarBodega,
  agregarProductos,
  crearHistorial,
  nuevoInventario,
} from "../services/postServices.js";

const agregarBodegaController = async (req, res, next) => {
  try {
    const { nombre, id_responsable, estado, creador } = req.body;
    const bodega = await agregarBodega(
      nombre,
      id_responsable,
      estado,
      created_by
    );
    res.status(200).json(bodega);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarProductoController = async (req, res, next) => {
  try {
    const { nombre, descripcion, estado, creador } = req.body;
    const producto = await agregarProductos(
      nombre,
      descripcion,
      estado,
      creador
    );
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const nuevoInventarioController = async (req, res, next) => {
  try {
    const { bodega, producto, cantidad, creador } = req.body;
    const inventario = await nuevoInventario(
      bodega,
      producto,
      cantidad,
      creador
    );
    res.status(200).json(inventario);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const agregarHistorialController = async (req, res, next) => {
  try {
    const { cantidad, bodega_origen, bodega_destino, producto, creador } =
      req.body;
    const result = await crearHistorial(
      cantidad,
      bodega_origen,
      bodega_destino,
      producto,
      creador
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  agregarBodegaController,
  agregarProductoController,
  nuevoInventarioController,
  agregarHistorialController,
};
