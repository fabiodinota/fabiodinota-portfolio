"use client";

import React, {
	useRef,
	useState,
	useCallback,
	useEffect,
	useActionState,
	useOptimistic,
} from "react";
import { useThemeContext } from "@/app/context/theme-context";
import { sendContactEmail, type ContactFormState } from "@/app/contact/actions";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Phase =
	| "boot"
	| "idle"
	| "name"
	| "email"
	| "subject"
	| "message"
	| "sending"
	| "done";

interface TerminalLine {
	id: number;
	content: string;
	type: "system" | "prompt" | "output" | "error" | "success" | "progress";
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const PROMPT = "guest@fabiodinota:~$ ";

const BOOT_LINES = [
	"FabioOS v2026.4 — Loading modules...",
	"[ok] react@19 loaded",
	"[ok] next@16 loaded",
	"[ok] resend-mailer ready",
	"Boot complete. Type `help` to get started.",
	"",
];

const HELP_TEXT = [
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

const KNOWN_COMMANDS = [
	"--web-app",
	"--ui-audit",
	"--consulting",
	"help",
	"clear",
];

const SERVICE_FLAGS = ["--web-app", "--ui-audit", "--consulting"];

const PHASE_PROMPTS: Record<string, string> = {
	name: "Enter your name:",
	email: "Enter your email:",
	subject: "Enter a subject:",
	message: 'Enter your message (press Shift+Enter for new line, Enter to send):',
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

let lineIdCounter = 0;
function makeLine(
	content: string,
	type: TerminalLine["type"] = "output",
): TerminalLine {
	return { id: ++lineIdCounter, content, type };
}

function isValidEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Terminal() {
	const { border } = useThemeContext();

	/* ---- state ---- */
	const [lines, setLines] = useState<TerminalLine[]>([]);
	const [input, setInput] = useState("");
	const [phase, setPhase] = useState<Phase>("boot");
	const [history, setHistory] = useState<string[]>([]);
	const [historyIdx, setHistoryIdx] = useState(-1);
	const [service, setService] = useState("");
	const [formFields, setFormFields] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const hiddenFormRef = useRef<HTMLFormElement>(null);

	/* ---- server action ---- */
	const initialState: ContactFormState = { success: false, error: "" };
	const [actionState, formAction, isPending] = useActionState(
		sendContactEmail,
		initialState,
	);
	const [optimisticDone, setOptimisticDone] = useOptimistic(false);

	/* ---- scrolling ---- */
	const scrollToBottom = useCallback(() => {
		requestAnimationFrame(() => {
			if (scrollRef.current) {
				scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
			}
		});
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [lines, scrollToBottom]);

	/* ---- boot sequence ---- */
	useEffect(() => {
		let i = 0;
		const timer = setInterval(() => {
			if (i < BOOT_LINES.length) {
				setLines((prev) => [...prev, makeLine(BOOT_LINES[i], "system")]);
				i++;
			} else {
				clearInterval(timer);
				setPhase("idle");
			}
		}, 180);
		return () => clearInterval(timer);
	}, []);

	/* ---- focus management ---- */
	useEffect(() => {
		if (phase === "message") {
			textareaRef.current?.focus();
		} else if (phase !== "boot" && phase !== "sending" && phase !== "done") {
			inputRef.current?.focus();
		}
	}, [phase]);

	/* ---- handle server action response ---- */
	useEffect(() => {
		if (actionState.success) {
			setLines((prev) => [
				...prev,
				makeLine("✓ Message delivered successfully.", "success"),
				makeLine(""),
				makeLine("Thank you! I'll get back to you soon.", "system"),
			]);
			setPhase("done");
		} else if (actionState.error && phase === "sending") {
			setLines((prev) => [
				...prev,
				makeLine(`Error: ${actionState.error}`, "error"),
				makeLine("Type a service flag to try again.", "system"),
			]);
			setPhase("idle");
		}
	}, [actionState, phase]);

	/* ---- add lines helper ---- */
	const push = useCallback((...newLines: TerminalLine[]) => {
		setLines((prev) => [...prev, ...newLines]);
	}, []);

	/* ---- progress animation ---- */
	const runSendAnimation = useCallback(() => {
		setPhase("sending");
		const steps = [
			"Packaging payload...",
			"Connecting to Resend API...",
			"Uploading payload to Resend... 25%",
			"Uploading payload to Resend... 50%",
			"Uploading payload to Resend... 75%",
			"Uploading payload to Resend... 100%",
		];
		let i = 0;
		const timer = setInterval(() => {
			if (i < steps.length) {
				setLines((prev) => [...prev, makeLine(steps[i], "progress")]);
				i++;
			} else {
				clearInterval(timer);
				// Submit the hidden form
				if (hiddenFormRef.current) {
					const fd = new FormData(hiddenFormRef.current);
					formAction(fd);
					setOptimisticDone(true);
				}
			}
		}, 300);
	}, [formAction, setOptimisticDone]);

	/* ---- tab completion ---- */
	const handleTab = useCallback(() => {
		if (phase !== "idle") return;
		const trimmed = input.trim();
		if (!trimmed) return;
		const matches = KNOWN_COMMANDS.filter((c) => c.startsWith(trimmed));
		if (matches.length === 1) {
			setInput(matches[0]);
		} else if (matches.length > 1) {
			push(
				makeLine(`${PROMPT}${trimmed}`, "prompt"),
				...matches.map((m) => makeLine(`  ${m}`)),
			);
		}
	}, [phase, input, push]);

	/* ---- process input for each phase ---- */
	const processInput = useCallback(
		(value: string) => {
			const trimmed = value.trim();

			// Add to history
			if (trimmed) {
				setHistory((prev) => [...prev, trimmed]);
				setHistoryIdx(-1);
			}

			switch (phase) {
				case "idle": {
					push(makeLine(`${PROMPT}${trimmed}`, "prompt"));

					if (!trimmed) break;

					if (trimmed === "help") {
						push(...HELP_TEXT.map((l) => makeLine(l)));
					} else if (trimmed === "clear") {
						setLines([]);
					} else if (SERVICE_FLAGS.includes(trimmed)) {
						setService(trimmed);
						push(
							makeLine(
								`Service selected: ${trimmed}`,
								"success",
							),
							makeLine(""),
							makeLine(PHASE_PROMPTS.name, "system"),
						);
						setPhase("name");
					} else {
						push(
							makeLine(
								`command not found: ${trimmed}`,
								"error",
							),
							makeLine(
								'Type "help" for available commands.',
								"system",
							),
						);
					}
					break;
				}

				case "name": {
					push(makeLine(`> ${trimmed}`, "prompt"));
					if (!trimmed) {
						push(makeLine("Name cannot be empty.", "error"));
						break;
					}
					setFormFields((prev) => ({ ...prev, name: trimmed }));
					push(makeLine(""), makeLine(PHASE_PROMPTS.email, "system"));
					setPhase("email");
					break;
				}

				case "email": {
					push(makeLine(`> ${trimmed}`, "prompt"));
					if (!isValidEmail(trimmed)) {
						push(
							makeLine(
								"Invalid email — must contain a valid @ address.",
								"error",
							),
						);
						break;
					}
					setFormFields((prev) => ({ ...prev, email: trimmed }));
					push(
						makeLine(""),
						makeLine(PHASE_PROMPTS.subject, "system"),
					);
					setPhase("subject");
					break;
				}

				case "subject": {
					push(makeLine(`> ${trimmed}`, "prompt"));
					if (!trimmed) {
						push(makeLine("Subject cannot be empty.", "error"));
						break;
					}
					setFormFields((prev) => ({ ...prev, subject: trimmed }));
					push(
						makeLine(""),
						makeLine(PHASE_PROMPTS.message, "system"),
					);
					setPhase("message");
					break;
				}

				default:
					break;
			}

			setInput("");
		},
		[phase, push],
	);

	/* ---- handle message submit (from textarea) ---- */
	const handleMessageSubmit = useCallback(
		(value: string) => {
			const trimmed = value.trim();
			push(makeLine(`> ${trimmed}`, "prompt"));
			if (!trimmed) {
				push(makeLine("Message cannot be empty.", "error"));
				return;
			}
			setFormFields((prev) => ({ ...prev, message: trimmed }));
			push(makeLine(""));
			setInput("");
			// Start the sending animation
			setTimeout(() => runSendAnimation(), 100);
		},
		[push, runSendAnimation],
	);

	/* ---- keyboard handling ---- */
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				handleTab();
				return;
			}

			if (e.key === "ArrowUp") {
				e.preventDefault();
				if (history.length === 0) return;
				const newIdx =
					historyIdx === -1
						? history.length - 1
						: Math.max(0, historyIdx - 1);
				setHistoryIdx(newIdx);
				setInput(history[newIdx]);
				return;
			}

			if (e.key === "ArrowDown") {
				e.preventDefault();
				if (historyIdx === -1) return;
				const newIdx = historyIdx + 1;
				if (newIdx >= history.length) {
					setHistoryIdx(-1);
					setInput("");
				} else {
					setHistoryIdx(newIdx);
					setInput(history[newIdx]);
				}
				return;
			}

			if (e.key === "Enter") {
				e.preventDefault();
				processInput(input);
			}
		},
		[handleTab, history, historyIdx, input, processInput],
	);

	const handleTextareaKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (e.key === "Enter" && !e.shiftKey) {
				e.preventDefault();
				handleMessageSubmit(input);
			}
		},
		[handleMessageSubmit, input],
	);

	/* ---- click to focus ---- */
	const handleContainerClick = useCallback(() => {
		if (phase === "message") {
			textareaRef.current?.focus();
		} else if (phase !== "boot" && phase !== "sending" && phase !== "done") {
			inputRef.current?.focus();
		}
	}, [phase]);

	/* ---- determine current prompt label ---- */
	const promptLabel =
		phase === "idle"
			? PROMPT
			: phase === "name" ||
				  phase === "email" ||
				  phase === "subject" ||
				  phase === "message"
				? "> "
				: "";

	const showInput =
		phase === "idle" ||
		phase === "name" ||
		phase === "email" ||
		phase === "subject";
	const showTextarea = phase === "message";

	return (
		<>
			{/* Hidden accessible form */}
			<form
				ref={hiddenFormRef}
				className="sr-only"
				aria-label="Contact form"
				tabIndex={-1}
			>
				<label htmlFor="sr-service">Service</label>
				<input
					id="sr-service"
					name="service"
					value={service}
					readOnly
					tabIndex={-1}
				/>
				<label htmlFor="sr-name">Name</label>
				<input
					id="sr-name"
					name="name"
					value={formFields.name}
					readOnly
					tabIndex={-1}
				/>
				<label htmlFor="sr-email">Email</label>
				<input
					id="sr-email"
					name="email"
					value={formFields.email}
					readOnly
					tabIndex={-1}
				/>
				<label htmlFor="sr-subject">Subject</label>
				<input
					id="sr-subject"
					name="subject"
					value={formFields.subject}
					readOnly
					tabIndex={-1}
				/>
				<label htmlFor="sr-message">Message</label>
				<textarea
					id="sr-message"
					name="message"
					value={formFields.message}
					readOnly
					tabIndex={-1}
				/>
			</form>

			{/* Terminal UI */}
			<div
				className={cn(
					"terminal w-full h-full mx-auto",
					"border rounded-lg overflow-hidden flex flex-col",
					border,
				)}
				onClick={handleContainerClick}
				role="application"
				aria-label="Interactive terminal contact form"
			>
				{/* Title bar */}
				<div
					className={cn(
						"terminal-titlebar flex items-center gap-2 px-4 py-3 border-b",
						border,
					)}
				>
					<span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
					<span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
					<span className="w-3 h-3 rounded-full bg-[#28C840]" />
					<span className="ml-3 text-sm terminal-text opacity-50 font-mono">
						guest@fabiodinota — contact
					</span>
				</div>

				{/* Output area */}
				<div
					ref={scrollRef}
					className="terminal-body flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
				>
					{lines.map((line) => (
						<div
							key={line.id}
							className={cn(
								"terminal-line whitespace-pre-wrap break-all",
								line.type === "system" && "terminal-system",
								line.type === "prompt" && "terminal-prompt-line",
								line.type === "error" && "terminal-error",
								line.type === "success" && "terminal-success",
								line.type === "progress" && "terminal-progress",
							)}
						>
							{line.content || "\u00A0"}
						</div>
					))}

					{/* Active input line */}
					{showInput && (
						<div className="terminal-input-line flex items-center">
							<span className="terminal-prompt-label shrink-0 mr-2">
								{promptLabel}
							</span>
							<input
								ref={inputRef}
								type="text"
								className="terminal-input bg-transparent border-none outline-none font-mono text-sm terminal-text caret-transparent"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								autoFocus
								spellCheck={false}
								autoComplete="off"
								style={{ width: `${Math.max(1, input.length)}ch` }}
								aria-label={
									phase === "idle"
										? "Terminal command input"
										: `Enter your ${phase}`
								}
							/>
							<span className="terminal-cursor" />
						</div>
					)}

					{showTextarea && (
						<div className="terminal-input-line flex items-start">
							<span className="terminal-prompt-label shrink-0 mr-2 pt-[2px]">
								{promptLabel}
							</span>
							<textarea
								ref={textareaRef}
								className="terminal-input terminal-textarea flex-1 bg-transparent border-none outline-none font-mono text-sm terminal-text caret-transparent resize-none min-h-[60px]"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleTextareaKeyDown}
								rows={3}
								spellCheck={false}
								autoComplete="off"
								aria-label="Enter your message"
							/>
							{/* Cursor not shown for textarea — caret is visible inside */}

						</div>
					)}

					{phase === "sending" && (
						<div className="terminal-input-line">
							<span className="terminal-cursor" />
						</div>
					)}

					{phase === "done" && !optimisticDone && isPending && (
						<div className="terminal-line terminal-system">
							Processing in background...
						</div>
					)}
				</div>
			</div>
		</>
	);
}
