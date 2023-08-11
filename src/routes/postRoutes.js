import { Router } from "express";
import { agregarBodegaController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarBodega", agregarBodegaController);
  return router;
};

export { postInitRoute };
