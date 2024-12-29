import { v2 as cloudinary } from "cloudinary";
import { config } from "./config";

cloudinary.config({
  cloud_name: config.cloudname,
  api_key: config.cloudapikey,
  api_secret: config.cloudsecret,
});

export default cloudinary;
