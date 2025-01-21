import { writeFileSync, mkdirSync, existsSync } from "fs";
import { defineEventHandler, readMultipartFormData } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);
    if (!files || files.length === 0) {
      return { message: "No file uploaded", status: 400 };
    }

    const uploadedFile = files[0];
    if (!uploadedFile.filename || !uploadedFile.data) {
      return { message: "Invalid file", status: 400 };
    }

    if (uploadedFile.type !== "application/pdf") {
      return { message: "Only PDF files are allowed", status: 400 };
    }

    const uploadDir = "public/pdf";
    const fileName = "Resume.pdf";
    const filePath = `${uploadDir}/${fileName}`;

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    writeFileSync(filePath, uploadedFile.data);

    return { message: "CV uploaded successfully!", status: 200 };
  } catch (error) {
    return { message: "Failed to upload CV", status: 500 };
  }
});
