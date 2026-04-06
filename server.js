import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ rota de teste
app.get("/env-check", (req, res) => {
  res.json({
    AWS_ACCESS_KEY: AKIAWSMCZII3KEIC7X22
    AWS_SECRET_KEY: bb2cb342-4784-4cef-8a41-c00fd11024d6
    AWS_REGION: Europe (Stockholm) eu-north-1
    AWS_BUCKET_NAME: three-angels-message-storage
  });
});

// rota principal
app.get("/", (req, res) => {
  res.send("API do three angels message está rodando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
