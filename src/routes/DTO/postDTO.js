import { object, string, number, date } from "yup";

const agregarBodegaDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      nombre: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
      id_responsable: number().strict().required(),
      estado: number().strict().required(),
      creador: number().strict().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
const agregarProductoDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      nombre: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
      descripcion: string()
        .strict()
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
        .required(),
      estado: number().strict().required(),
      creador: number().strict().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const nuevoInventarioDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      bodega: number().strict().required(),
      producto: number().strict().required(),
      cantidad: number().strict().required(),
      creador: number().strict().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const agregarHistorialDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      bodega_origen: number().strict().required(),
      bodega_destino: number().strict().required(),
      producto: number().strict().required(),
      cantidad: number().strict().required(),
      creador: number().strict().required(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export {
  agregarBodegaDTO,
  agregarProductoDTO,
  nuevoInventarioDTO,
  agregarHistorialDTO,
};
