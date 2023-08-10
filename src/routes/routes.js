import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/post", postInitRoute());
  router.use("/get", getInitRoute());
  return router;
};

export { initAPIRoutes };
