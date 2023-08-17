import { Router } from "express";
import {
  agregarBodegaController,
  agregarHistorialController,
  agregarProductoController,
  nuevoInventarioController,
} from "../controllers/postControllers.js";
import { agregarBodegaDTO, agregarProductoDTO } from "./DTO/postDTO.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaDTO, agregarBodegaController);
  router.post(
    "/agregarProducto",
    agregarProductoDTO,
    agregarProductoController
  );
  router.post("/nuevoInventario", nuevoInventarioController);
  router.post("/traslado", agregarHistorialController);
  return router;
};

export { postInitRoute };
