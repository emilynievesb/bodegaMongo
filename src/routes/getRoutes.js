import { Router } from "express";
import {
  ordenarBodegasController,
  totalInventariosController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/ordenarBodegas",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareBodegas,
    ordenarBodegasController
  );
  router.get(
    "/totalInventarios",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareInventarios,
    totalInventariosController
  );
  return router;
};

export { getInitRoute };
