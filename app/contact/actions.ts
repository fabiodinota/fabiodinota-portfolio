"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
	success: boolean;
	error: string;
}

export async function sendContactEmail(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const service = formData.get("service") as string;
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

	// Server-side validation
	if (!service || !name || !email || !subject || !message) {
		return { success: false, error: "All fields are required." };
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return { success: false, error: "Invalid email address." };
	}

	const validServices = ["--web-app", "--ui-audit", "--consulting"];
	if (!validServices.includes(service)) {
		return { success: false, error: "Invalid service flag." };
	}

	try {
		await resend.emails.send({
			from: process.env.EMAIL || "contact@fabiodinota.com",
			to: process.env.EMAIL || "contact@fabiodinota.com",
			subject: `New message from fabiodinota.com — ${subject}`,
			react: EmailTemplate({
				service,
				name,
				email,
				subject,
				message,
			}) as React.ReactElement,
		});

		return { success: true, error: "" };
	} catch (error) {
		return {
			success: false,
			error: (error as Error).message || "Failed to send message.",
		};
	}
}
