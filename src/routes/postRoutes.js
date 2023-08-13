import { Router } from "express";
import {
  agregarBodegaController,
  agregarProductoController,
} from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaController);
  router.post("/agregarProducto", agregarProductoController);
  return router;
};

export { postInitRoute };
