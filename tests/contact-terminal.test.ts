import { describe, expect, it, beforeEach } from "vitest";
import {
	getCommandMatches,
	getPromptLabel,
	processMessageInput,
	processTerminalInput,
	resetTerminalLineCounter,
	shouldShowTextarea,
	shouldShowTextInput,
} from "@/tests/fixtures/contact-terminal/terminal-state";
import { validateContactPayload } from "@/features/contact/validation";

describe("contact validation", () => {
	it("accepts complete payloads with known service flags", () => {
		expect(
			validateContactPayload({
				service: "--web-app",
				name: "Fabio",
				email: "fabio@example.com",
				subject: "Project",
				message: "Let's build.",
			}),
		).toBe("");
	});

	it("rejects missing fields, invalid emails, and unknown service flags", () => {
		expect(
			validateContactPayload({
				service: "",
				name: "Fabio",
				email: "fabio@example.com",
				subject: "Project",
				message: "Let's build.",
			}),
		).toBe("All fields are required.");

		expect(
			validateContactPayload({
				service: "--web-app",
				name: "Fabio",
				email: "invalid",
				subject: "Project",
				message: "Let's build.",
			}),
		).toBe("Invalid email address.");

		expect(
			validateContactPayload({
				service: "--unknown",
				name: "Fabio",
				email: "fabio@example.com",
				subject: "Project",
				message: "Let's build.",
			}),
		).toBe("Invalid service flag.");
	});
});

describe("terminal state helpers", () => {
	beforeEach(() => {
		resetTerminalLineCounter();
	});

	it("matches commands for tab completion", () => {
		expect(getCommandMatches("--")).toEqual([
			"--web-app",
			"--ui-audit",
			"--consulting",
		]);
		expect(getCommandMatches("hel")).toEqual(["help"]);
	});

	it("selects a service and advances to the name prompt", () => {
		const result = processTerminalInput("idle", "--ui-audit");

		expect(result.nextPhase).toBe("name");
		expect(result.service).toBe("--ui-audit");
		expect(result.lines.map((line) => line.content)).toEqual([
			"guest@fabiodinota:~$ --ui-audit",
			"Service selected: --ui-audit",
			"",
			"Enter your name:",
		]);
	});

	it("keeps invalid email input in the email phase", () => {
		const result = processTerminalInput("email", "not-an-email");

		expect(result.nextPhase).toBeUndefined();
		expect(result.formPatch).toBeUndefined();
		expect(result.lines.at(-1)).toMatchObject({
			content: "Invalid email — must contain a valid @ address.",
			type: "error",
		});
	});

	it("prepares non-empty messages for sending", () => {
		const result = processMessageInput("Hello\nthere");

		expect(result.shouldSend).toBe(true);
		expect(result.formPatch).toEqual({ message: "Hello\nthere" });
		expect(result.lines.map((line) => line.content)).toEqual([
			"> Hello\nthere",
			"",
		]);
	});

	it("derives prompt and input visibility from phase", () => {
		expect(getPromptLabel("idle")).toBe("guest@fabiodinota:~$ ");
		expect(getPromptLabel("message")).toBe("> ");
		expect(shouldShowTextInput("subject")).toBe(true);
		expect(shouldShowTextInput("message")).toBe(false);
		expect(shouldShowTextarea("message")).toBe(true);
	});
});
