// app/api/admin/content/route.js
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

// GET: Fetch the latest data for the admin panel
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const content = await db.collection('site_content').findOne({ type: 'homepage' });

    if (!content) {
      return NextResponse.json({ error: 'No content found' }, { status: 404 });
    }

    const { _id, type, ...cleanContent } = content;
    return NextResponse.json(cleanContent);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Save the updated data to MongoDB
export async function PUT(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Update the document. If it doesn't exist, create it (upsert: true)
    await db.collection('site_content').updateOne(
      { type: 'homepage' },
      { $set: body },
      { upsert: true }
    );

    return NextResponse.json({ success: true, message: 'Content saved successfully!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}