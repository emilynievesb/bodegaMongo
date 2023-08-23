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
import { limitPets, limitSize } from "../utils/limit.js";

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarBodega",
    limitPets,
    limitSize,
    agregarBodegaDTO,
    agregarBodegaController
  );
  router.post(
    "/agregarProducto",
    limitPets,
    limitSize,
    agregarProductoDTO,
    agregarProductoController
  );
  router.post(
    "/nuevoInventario",
    limitPets,
    limitSize,
    nuevoInventarioDTO,
    nuevoInventarioController
  );
  router.post("/traslado", agregarHistorialDTO, agregarHistorialController);
  return router;
};

export { postInitRoute };
