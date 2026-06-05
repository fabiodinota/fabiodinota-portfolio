import { EmailTemplate } from '@/app/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await new Response(req.body).text();

        const { name, email, subject, message } = JSON.parse(body);

        // Map the old `type` field to a service flag for backwards compat
        const service = "--web-app";

        const data = await resend.emails.send({
                from: process.env.EMAIL || "contact@fabiodinota.com",
                to: process.env.EMAIL ||  "contact@fabiodinota.com",
                subject: "New message from fabiodinota.com" + " - " + subject,
                react: EmailTemplate({ service, name, email, subject, message }) as React.ReactElement,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message || error })
    }
}
