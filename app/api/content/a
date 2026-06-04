// app/api/content/route.js
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    
    // Make sure this matches the database name in your .env.local file
    const db = client.db(process.env.MONGODB_DB); 
    
    // Fetch the document we created in MongoDB Atlas
    const content = await db.collection('site_content').findOne({ type: 'homepage' });

    if (!content) {
      return NextResponse.json({ error: 'Content not found. Did you seed the database?' }, { status: 404 });
    }

    // Remove the _id and type fields before sending to the client
    const { _id, type, ...cleanContent } = content;
    
    // Cache the data for 1 hour (3600 seconds) to speed up Vercel and save DB reads
    return NextResponse.json(cleanContent, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}