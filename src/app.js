import express from "express";

const app = express();
app.use(express.json()); //! Middleaware para leer json
export default app;
