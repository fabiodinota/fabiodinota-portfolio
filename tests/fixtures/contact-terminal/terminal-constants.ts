import { SERVICE_FLAGS } from "@/features/contact/validation";

export const PROMPT = "guest@fabiodinota:~$ ";

export const BOOT_LINES = [
	"FabioOS v2026.4 — Loading modules...",
	"[ok] react@19 loaded",
	"[ok] next@16 loaded",
	"[ok] resend-mailer ready",
	"Boot complete. Type `help` to get started.",
	"",
];

export const HELP_TEXT = [
	"Available commands:",
	"",
	"  --web-app      Full-stack web application engineering",
	"                 (e.g. The Velox, PartyUp)",
	"  --ui-audit     UI/UX audit & interface redesign",
	"                 (e.g. Lemon Terminal)",
	"  --consulting   Technical strategy & stack advice",
	"",
	"  help           Show this help message",
	"  clear          Clear the terminal",
];

export const KNOWN_COMMANDS = [...SERVICE_FLAGS, "help", "clear"];

export const PHASE_PROMPTS = {
	name: "Enter your name:",
	email: "Enter your email:",
	subject: "Enter a subject:",
	message: 'Enter your message (press Shift+Enter for new line, Enter to send):',
} as const;

export const SEND_ANIMATION_STEPS = [
	"Packaging payload...",
	"Connecting to Resend API...",
	"Uploading payload to Resend... 25%",
	"Uploading payload to Resend... 50%",
	"Uploading payload to Resend... 75%",
	"Uploading payload to Resend... 100%",
];
