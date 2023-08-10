import dotenv from "dotenv";

dotenv.config();

const config = JSON.parse(process.env.MY_SERVER);
const db = {
  user: JSON.parse(process.env.MY_CONFIG).user,
  pass: JSON.parse(process.env.MY_CONFIG).password,
  dbname: JSON.parse(process.env.MY_CONFIG).database,
};

export { config, db };
