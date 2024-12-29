import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.DBURL,
  env: process.env.ENV,
  jwtSecret: process.env.JWTSECRET,
  cloudname: process.env.CLOUDNAME,
  cloudapikey: process.env.CLOUDKEY,
  cloudsecret: process.env.CLOUDSECRET,
};

export const config = Object.freeze(_config);
