export const SERVICE_FLAGS = ["--web-app", "--ui-audit", "--consulting"] as const;

export type ContactServiceFlag = (typeof SERVICE_FLAGS)[number];

export interface ContactPayload {
	service: string;
	name: string;
	email: string;
	subject: string;
	message: string;
}

export function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isServiceFlag(value: string): value is ContactServiceFlag {
	return SERVICE_FLAGS.includes(value as ContactServiceFlag);
}

export function validateContactPayload(payload: ContactPayload) {
	const { service, name, email, subject, message } = payload;

	if (!service || !name || !email || !subject || !message) {
		return "All fields are required.";
	}

	if (!isValidEmail(email)) {
		return "Invalid email address.";
	}

	if (!isServiceFlag(service)) {
		return "Invalid service flag.";
	}

	return "";
}
