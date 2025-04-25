// src/routes/upload.js
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});
export const uploads3 = async (req, res) => {
  try {
    const fileType = req.query.fileType || "image/jpeg";
    const extension = fileType.split("/")[1];
    const fileKey = `uploads/${uuidv4()}.${extension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
      ContentType: fileType,
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 60 });

    res.json({ url, key: fileKey });
  } catch (error) {
    console.error("Failed to get presigned URL:", error);
    res.status(500).json({ error: "Failed to generate presigned URL" });
  }
};
