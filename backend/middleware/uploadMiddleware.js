import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// 🔧 Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📁 Upload folder path
const uploadDir = path.join(__dirname, "../uploads");

// 📂 Create uploads folder if not exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ==============================================
// 📸 Storage Configuration
// ==============================================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);

    cb(null, `student-${uniqueSuffix}${ext}`);
  },
});

// ==============================================
// 🔒 File Filter (Only Images Allowed)
// ==============================================
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;

  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only image files (jpg, jpeg, png, webp) are allowed"));
  }
};

// ==============================================
// ⚙️ Multer Config
// ==============================================
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
  },
});

// 📤 Export
export { upload };