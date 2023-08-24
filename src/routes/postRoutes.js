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
    authorizationMiddleware,
    contentMiddlewareBodegas,
    agregarBodegaController
  );
  router.post(
    "/agregarProducto",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareProductos,
    agregarProductoDTO,
    agregarProductoController
  );
  router.post(
    "/nuevoInventario",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareInventarios,
    nuevoInventarioDTO,
    nuevoInventarioController
  );
  router.post(
    "/traslado",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareHistoriales,
    agregarHistorialDTO,
    agregarHistorialController
  );
  return router;
};

export { postInitRoute };
