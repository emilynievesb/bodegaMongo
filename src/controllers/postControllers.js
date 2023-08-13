import { agregarBodega } from "../services/postServices.js";

const agregarBodegaController = async (req, res, next) => {
  try {
    const { nombre, id_responsable, estado, created_by } = req.body;
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
export { agregarBodegaController };
