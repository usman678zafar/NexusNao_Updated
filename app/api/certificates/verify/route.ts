import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Certificate from '@/lib/models/Certificate';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Certificate ID is required' },
                { status: 400 }
            );
        }

        await dbConnect();

        // Case-insensitive search
        const certificate = await Certificate.findOne({
            certificateId: { $regex: new RegExp(`^${id}$`, 'i') }
        });

        if (!certificate || !certificate.valid) {
            return NextResponse.json(
                { valid: false, message: 'Certificate not found or invalid' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            valid: true,
            data: certificate
        });

    } catch (error) {
        console.error('Error verification certificate:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
