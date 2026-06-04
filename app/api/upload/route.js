// app/api/upload/route.js
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Log to terminal to verify keys are loaded
console.log("🔍 Cloudinary Config Check:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "✅ Set" : "❌ MISSING",
  api_key: process.env.CLOUDINARY_API_KEY ? "✅ Set" : "❌ MISSING",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "✅ Set" : "❌ MISSING",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log(`📁 File received: ${file.name} | Size: ${(file.size / (1024*1024)).toFixed(2)}MB`);

    // STRICT 3MB LIMIT CHECK
    const MAX_SIZE = 3 * 1024 * 1024; 
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: `File exceeds the 3MB limit. Your file is ${(file.size / (1024*1024)).toFixed(2)}MB.` }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'team-hustlers-cms', resource_type: 'auto' },
        (error, result) => {
          if (error) {
            console.error("❌ Cloudinary Upload Error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer);
    });

    return NextResponse.json({ url: uploadResult.secure_url });
  } catch (error) {
    console.error("❌ Upload API Error:", error);
    // Return the exact error message to the frontend
    return NextResponse.json({ error: 'Upload failed: ' + error.message }, { status: 500 });
  }
}