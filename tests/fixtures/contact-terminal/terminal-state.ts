import {
	HELP_TEXT,
	KNOWN_COMMANDS,
	PHASE_PROMPTS,
	PROMPT,
} from "@/tests/fixtures/contact-terminal/terminal-constants";
import type {
	ContactFormFields,
	TerminalLine,
	TerminalLineType,
	TerminalPhase,
} from "@/tests/fixtures/contact-terminal/terminal-types";
import { isServiceFlag, isValidEmail } from "@/features/contact/validation";

let lineIdCounter = 0;

export function resetTerminalLineCounter() {
	lineIdCounter = 0;
}

export function makeTerminalLine(
	content: string,
	type: TerminalLineType = "output",
): TerminalLine {
	return { id: ++lineIdCounter, content, type };
}

export function createInitialContactFields(): ContactFormFields {
	return {
		name: "",
		email: "",
		subject: "",
		message: "",
	};
}

export function getCommandMatches(value: string) {
	const trimmed = value.trim();
	if (!trimmed) return [];

	return KNOWN_COMMANDS.filter((command) => command.startsWith(trimmed));
}

export function getPromptLabel(phase: TerminalPhase) {
	if (phase === "idle") return PROMPT;

	return phase === "name" ||
		phase === "email" ||
		phase === "subject" ||
		phase === "message"
		? "> "
		: "";
}

export function shouldShowTextInput(phase: TerminalPhase) {
	return (
		phase === "idle" ||
		phase === "name" ||
		phase === "email" ||
		phase === "subject"
	);
}

export function shouldShowTextarea(phase: TerminalPhase) {
	return phase === "message";
}

export function shouldFocusTextInput(phase: TerminalPhase) {
	return phase !== "boot" && phase !== "sending" && phase !== "done";
}

export interface TerminalInputResult {
	lines: TerminalLine[];
	clear?: boolean;
	nextPhase?: TerminalPhase;
	service?: string;
	formPatch?: Partial<ContactFormFields>;
}

export function processTerminalInput(
	phase: TerminalPhase,
	value: string,
): TerminalInputResult {
	const trimmed = value.trim();

	switch (phase) {
		case "idle":
			return processIdleCommand(trimmed);
		case "name":
			return processName(trimmed);
		case "email":
			return processEmail(trimmed);
		case "subject":
			return processSubject(trimmed);
		default:
			return { lines: [] };
	}
}

export function processMessageInput(value: string): TerminalInputResult & {
	shouldSend: boolean;
} {
	const trimmed = value.trim();
	const lines = [makeTerminalLine(`> ${trimmed}`, "prompt")];

	if (!trimmed) {
		return {
			lines: [...lines, makeTerminalLine("Message cannot be empty.", "error")],
			shouldSend: false,
		};
	}

	return {
		lines: [...lines, makeTerminalLine("")],
		formPatch: { message: trimmed },
		shouldSend: true,
	};
}

function processIdleCommand(trimmed: string): TerminalInputResult {
	const promptLine = makeTerminalLine(`${PROMPT}${trimmed}`, "prompt");

	if (!trimmed) {
		return { lines: [promptLine] };
	}

	if (trimmed === "help") {
		return {
			lines: [promptLine, ...HELP_TEXT.map((line) => makeTerminalLine(line))],
		};
	}

	if (trimmed === "clear") {
		return { lines: [], clear: true };
	}

	if (isServiceFlag(trimmed)) {
		return {
			lines: [
				promptLine,
				makeTerminalLine(`Service selected: ${trimmed}`, "success"),
				makeTerminalLine(""),
				makeTerminalLine(PHASE_PROMPTS.name, "system"),
			],
			service: trimmed,
			nextPhase: "name",
		};
	}

	return {
		lines: [
			promptLine,
			makeTerminalLine(`command not found: ${trimmed}`, "error"),
			makeTerminalLine('Type "help" for available commands.', "system"),
		],
	};
}

function processName(trimmed: string): TerminalInputResult {
	const lines = [makeTerminalLine(`> ${trimmed}`, "prompt")];

	if (!trimmed) {
		return {
			lines: [...lines, makeTerminalLine("Name cannot be empty.", "error")],
		};
	}

	return {
		lines: [
			...lines,
			makeTerminalLine(""),
			makeTerminalLine(PHASE_PROMPTS.email, "system"),
		],
		formPatch: { name: trimmed },
		nextPhase: "email",
	};
}

function processEmail(trimmed: string): TerminalInputResult {
	const lines = [makeTerminalLine(`> ${trimmed}`, "prompt")];

	if (!isValidEmail(trimmed)) {
		return {
			lines: [
				...lines,
				makeTerminalLine(
					"Invalid email — must contain a valid @ address.",
					"error",
				),
			],
		};
	}

	return {
		lines: [
			...lines,
			makeTerminalLine(""),
			makeTerminalLine(PHASE_PROMPTS.subject, "system"),
		],
		formPatch: { email: trimmed },
		nextPhase: "subject",
	};
}

function processSubject(trimmed: string): TerminalInputResult {
	const lines = [makeTerminalLine(`> ${trimmed}`, "prompt")];

	if (!trimmed) {
		return {
			lines: [...lines, makeTerminalLine("Subject cannot be empty.", "error")],
		};
	}

	return {
		lines: [
			...lines,
			makeTerminalLine(""),
			makeTerminalLine(PHASE_PROMPTS.message, "system"),
		],
		formPatch: { subject: trimmed },
		nextPhase: "message",
	};
}
