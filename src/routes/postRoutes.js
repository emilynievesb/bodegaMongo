import { Router } from "express";
import {
  agregarBodegaController,
  agregarHistorialController,
  agregarProductoController,
  nuevoInventarioController,
} from "../controllers/postControllers.js";
import {
  agregarBodegaDTO,
  agregarHistorialDTO,
  agregarProductoDTO,
  nuevoInventarioDTO,
} from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaDTO, agregarBodegaController);
  router.post(
    "/agregarProducto",
    agregarProductoDTO,
    agregarProductoController
  );
  router.post(
    "/nuevoInventario",
    nuevoInventarioDTO,
    nuevoInventarioController
  );
  router.post("/traslado", agregarHistorialDTO, agregarHistorialController);
  return router;
};

export { postInitRoute };
