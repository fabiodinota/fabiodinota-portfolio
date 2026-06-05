export type TerminalPhase =
	| "boot"
	| "idle"
	| "name"
	| "email"
	| "subject"
	| "message"
	| "sending"
	| "done";

export type TerminalLineType =
	| "system"
	| "prompt"
	| "output"
	| "error"
	| "success"
	| "progress";

export interface TerminalLine {
	id: number;
	content: string;
	type: TerminalLineType;
}

export interface ContactFormFields {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface ContactPayload extends ContactFormFields {
	service: string;
}
