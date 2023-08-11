import { ordenarBodegas } from "../services/getServices.js";

const ordenarBodegasController = async (req, res, next) => {
  try {
    const bodegas = await ordenarBodegas();
    res.status(200).json(bodegas);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { ordenarBodegasController };
