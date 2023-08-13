import { Router } from "express";
import {
  agregarBodegaController,
  agregarProductoController,
  nuevoInventarioController,
} from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaController);
  router.post("/agregarProducto", agregarProductoController);
  router.post("/nuevoInventario", nuevoInventarioController);
  return router;
};

export { postInitRoute };
