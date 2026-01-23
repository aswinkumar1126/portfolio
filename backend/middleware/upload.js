import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "projects", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png", "webp"],    
    transformation: [
      { width: 1200, height: 800, crop: "limit" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  },
});

const upload = multer({ storage });

export default upload;
