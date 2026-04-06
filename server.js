import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AWS from "aws-sdk";
import multer from "multer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   CONFIG AWS S3
========================= */
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

/* =========================
   MULTER (upload em memória)
========================= */
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* =========================
   ROTAS
========================= */

// Teste da API
app.get("/", (req, res) => {
  res.send("API do three angels message está rodando 🚀");
});

// Teste das variáveis de ambiente
app.get("/env-check", (req, res) => {
  res.json({
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY ? "OK" : "MISSING",
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY ? "OK" : "MISSING",
    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
  });
});

// Upload de ficheiro para S3
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Nenhum ficheiro enviado" });
    }

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const data = await s3.upload(params).promise();

    res.json({
      message: "Upload feito com sucesso 🚀",
      url: data.Location,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
