import { Router } from "express";
import {
  agregarBodegaController,
  agregarHistorialController,
  agregarProductoController,
  nuevoInventarioController,
} from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaController);
  router.post("/agregarProducto", agregarProductoController);
  router.post("/nuevoInventario", nuevoInventarioController);
  router.post("/traslado", agregarHistorialController);
  return router;
};

export { postInitRoute };
