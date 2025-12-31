import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Article from '@/lib/models/Article';

export async function GET() {
    try {
        console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
        console.log('MONGODB_URI value:', process.env.MONGODB_URI?.substring(0, 30) + '...');
        await dbConnect();
        const articles = await Article.find({}).sort({ date: -1 });
        return NextResponse.json({ success: true, data: articles });
    } catch (error: any) {
        console.error('Articles API Error:', error.message);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const article = await Article.create(body);
        return NextResponse.json({ success: true, data: article }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
