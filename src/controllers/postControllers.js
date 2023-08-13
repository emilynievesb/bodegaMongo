import { agregarBodega, agregarProductos } from "../services/postServices.js";

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
export { agregarBodegaController, agregarProductoController };
