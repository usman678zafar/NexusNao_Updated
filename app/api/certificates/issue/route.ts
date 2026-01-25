import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Certificate from '@/lib/models/Certificate';
import { Resend } from 'resend';
import { nanoid } from 'nanoid';

// Initialize Resend with key from env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { recipientName, recipientEmail, sessionName } = await req.json();

        if (!recipientName || !recipientEmail || !sessionName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate a unique Certificate ID (e.g., NEXUS-2026-XXXX)
        // Using nanoid for randomness, but ensuring a readable prefix if desired.
        // Making it simple: NEXUS-[YEAR]-[RANDOM_6_CHARS]
        const year = new Date().getFullYear();
        const randomSuffix = nanoid(6).toUpperCase();
        const certificateId = `NEXUS-${year}-${randomSuffix}`;

        const newCertificate = await Certificate.create({
            certificateId,
            recipientName,
            recipientEmail,
            sessionName,
            issueDate: new Date(),
        });

        // TODO: Send Email via Resend
        // For now, we will just return success.

        // Example Email Logic (Commented out until template is ready/env key is confirmed):
        /*
        await resend.emails.send({
          from: 'Nexus Nao <certificates@nexusnao.com>',
          to: recipientEmail,
          subject: `Your Certificate: ${sessionName}`,
          html: `<p>Congratulations ${recipientName}!</p><p>Here is your certificate: <a href="https://nexusnao.com/verify/${certificateId}">View Certificate</a></p>`
        });
        */

        return NextResponse.json({
            success: true,
            data: newCertificate
        });

    } catch (error) {
        console.error('Error issuing certificate:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
