import { Router } from "express";
import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { appToken } from "../utils/token.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/token", appToken);
  router.use("/post", postInitRoute());
  router.use("/get", getInitRoute());
  return router;
};

export { initAPIRoutes };
