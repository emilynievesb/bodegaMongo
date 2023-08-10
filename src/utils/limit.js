import { rateLimit } from "express-rate-limit";

const limitSize = (req, res, next) => {
  const payloadSizeLimit = 91;
  const contentLength = req.headers["content-length"];
  if (contentLength > payloadSizeLimit) {
    return res.status(413).json({
      message: "Body too large.",
    });
  }
  next();
};

const limitPets = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: true,
  message: {
    message: "Limit exceeded",
  },
});
export { limitSize, limitPets };
