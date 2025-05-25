import { v2 } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
  api_key: 'process.env.CLOUDINARY_API_KEY',
  api_secret: 'process.env.CLOUDINARY_SECRET_KEY' , // Click 'View API Keys' above to copy your API secret
});
