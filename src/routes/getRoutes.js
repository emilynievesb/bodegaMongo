import { Router } from "express";
import {
  ordenarBodegasController,
  totalInventariosController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/ordenarBodegas", ordenarBodegasController);
  router.get("/totalInventarios", totalInventariosController);
  return router;
};

export { getInitRoute };
