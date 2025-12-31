import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Article from '@/lib/models/Article';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;
        const article = await Article.findOne({ slug });

        if (!article) {
            return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: article });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
