import { EmailTemplate } from '@/app/components/EmailTemplate';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function POST(req: NextRequest) {
    try {
        let body = await new Response(req.body).text();

        const { type, name, email, subject, budget, message } = JSON.parse(body);

        const data = await resend.emails.send({
                from: process.env.EMAIL || "contact@fabiodinota.com",
                to: process.env.EMAIL ||  "contact@fabiodinota.com",
                subject: "New message from fabiodinota.com" + " - " + subject,
                react: EmailTemplate({ type, name, email, subject, budget, message }), 
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message || error })
    }
}

export default POST;
