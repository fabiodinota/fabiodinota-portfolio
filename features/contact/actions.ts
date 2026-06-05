"use server";

import { Resend } from "resend";
import type { ReactElement } from "react";
import { EmailTemplate } from "@/features/contact/email-template";
import { validateContactPayload } from "@/features/contact/validation";

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

	const validationError = validateContactPayload({
		service,
		name,
		email,
		subject,
		message,
	});
	if (validationError) {
		return { success: false, error: validationError };
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
			}) as ReactElement,
		});

		return { success: true, error: "" };
	} catch (error) {
		return {
			success: false,
			error: (error as Error).message || "Failed to send message.",
		};
	}
}
