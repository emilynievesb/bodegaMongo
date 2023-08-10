import app from "./app.js";
import { config } from "./utils/config.js";

const main = () => {
  // configuracion de env

  app.listen(config, () =>
    console.log(`http://${config.hostname}:${config.port}`)
  );

  console.log(`Running...`);
};

// funcion que arranca todo
main();
