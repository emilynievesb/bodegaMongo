import { Router } from "express";
import { ordenarBodegasController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/ordenarBodegas", ordenarBodegasController);
  return router;
};

export { getInitRoute };
