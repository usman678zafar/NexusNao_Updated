import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Certificate from '@/lib/models/Certificate';

export async function GET(req: Request) {
    try {
        await dbConnect();

        // Fetch latest 50 certificates
        const certificates = await Certificate.find({})
            .sort({ createdAt: -1 })
            .limit(50);

        return NextResponse.json({
            success: true,
            data: certificates
        });

    } catch (error) {
        console.error('Error fetching certificates:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
