"use client";

import {
	useRef,
	useState,
	useCallback,
	useEffect,
	useActionState,
	useOptimistic,
} from "react";
import type React from "react";
import { useThemeContext } from "@/context/theme-context";
import { sendContactEmail, type ContactFormState } from "@/features/contact/actions";
import {
	BOOT_LINES,
	PROMPT,
	SEND_ANIMATION_STEPS,
} from "@/tests/fixtures/contact-terminal/terminal-constants";
import { TerminalHiddenForm } from "@/tests/fixtures/contact-terminal/terminal-hidden-form";
import { TerminalInput } from "@/tests/fixtures/contact-terminal/terminal-input";
import { TerminalLines } from "@/tests/fixtures/contact-terminal/terminal-lines";
import {
	createInitialContactFields,
	getCommandMatches,
	getPromptLabel,
	makeTerminalLine,
	processMessageInput,
	processTerminalInput,
	shouldFocusTextInput,
	shouldShowTextarea,
	shouldShowTextInput,
} from "@/tests/fixtures/contact-terminal/terminal-state";
import type {
	ContactFormFields,
	TerminalLine,
	TerminalPhase,
} from "@/tests/fixtures/contact-terminal/terminal-types";
import { cn } from "@/lib/utils";

export default function Terminal() {
	const { border } = useThemeContext();

	const [lines, setLines] = useState<TerminalLine[]>([]);
	const [input, setInput] = useState("");
	const [phase, setPhase] = useState<TerminalPhase>("boot");
	const [history, setHistory] = useState<string[]>([]);
	const [historyIdx, setHistoryIdx] = useState(-1);
	const [service, setService] = useState("");
	const [formFields, setFormFields] = useState<ContactFormFields>(
		createInitialContactFields,
	);

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const hiddenFormRef = useRef<HTMLFormElement>(null);

	const initialState: ContactFormState = { success: false, error: "" };
	const [actionState, formAction, isPending] = useActionState(
		sendContactEmail,
		initialState,
	);
	const [optimisticDone, setOptimisticDone] = useOptimistic(false);

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

	useEffect(() => {
		let index = 0;
		const timer = setInterval(() => {
			if (index < BOOT_LINES.length) {
				setLines((prev) => [
					...prev,
					makeTerminalLine(BOOT_LINES[index], "system"),
				]);
				index++;
			} else {
				clearInterval(timer);
				setPhase("idle");
			}
		}, 180);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (phase === "message") {
			textareaRef.current?.focus();
		} else if (shouldFocusTextInput(phase)) {
			inputRef.current?.focus();
		}
	}, [phase]);

	useEffect(() => {
		if (actionState.success) {
			setLines((prev) => [
				...prev,
				makeTerminalLine("✓ Message delivered successfully.", "success"),
				makeTerminalLine(""),
				makeTerminalLine("Thank you! I'll get back to you soon.", "system"),
			]);
			setPhase("done");
		} else if (actionState.error && phase === "sending") {
			setLines((prev) => [
				...prev,
				makeTerminalLine(`Error: ${actionState.error}`, "error"),
				makeTerminalLine("Type a service flag to try again.", "system"),
			]);
			setPhase("idle");
		}
	}, [actionState, phase]);

	const push = useCallback((...newLines: TerminalLine[]) => {
		setLines((prev) => [...prev, ...newLines]);
	}, []);

	const runSendAnimation = useCallback(() => {
		setPhase("sending");

		let index = 0;
		const timer = setInterval(() => {
			if (index < SEND_ANIMATION_STEPS.length) {
				setLines((prev) => [
					...prev,
					makeTerminalLine(SEND_ANIMATION_STEPS[index], "progress"),
				]);
				index++;
			} else {
				clearInterval(timer);
				if (hiddenFormRef.current) {
					const formData = new FormData(hiddenFormRef.current);
					formAction(formData);
					setOptimisticDone(true);
				}
			}
		}, 300);
	}, [formAction, setOptimisticDone]);

	const handleTab = useCallback(() => {
		if (phase !== "idle") return;

		const trimmed = input.trim();
		const matches = getCommandMatches(trimmed);
		if (matches.length === 1) {
			setInput(matches[0]);
		} else if (matches.length > 1) {
			push(
				makeTerminalLine(`${PROMPT}${trimmed}`, "prompt"),
				...matches.map((match) => makeTerminalLine(`  ${match}`)),
			);
		}
	}, [phase, input, push]);

	const processInput = useCallback(
		(value: string) => {
			const trimmed = value.trim();

			if (trimmed) {
				setHistory((prev) => [...prev, trimmed]);
				setHistoryIdx(-1);
			}

			const result = processTerminalInput(phase, value);

			if (result.clear) {
				setLines([]);
			} else {
				push(...result.lines);
			}

			if (result.service !== undefined) {
				setService(result.service);
			}

			if (result.formPatch) {
				setFormFields((prev) => ({ ...prev, ...result.formPatch }));
			}

			if (result.nextPhase) {
				setPhase(result.nextPhase);
			}

			setInput("");
		},
		[phase, push],
	);

	const handleMessageSubmit = useCallback(
		(value: string) => {
			const result = processMessageInput(value);
			push(...result.lines);

			if (!result.shouldSend) {
				return;
			}

			if (result.formPatch) {
				setFormFields((prev) => ({ ...prev, ...result.formPatch }));
			}
			setInput("");
			setTimeout(() => runSendAnimation(), 100);
		},
		[push, runSendAnimation],
	);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent) => {
			if (event.key === "Tab") {
				event.preventDefault();
				handleTab();
				return;
			}

			if (event.key === "ArrowUp") {
				event.preventDefault();
				if (history.length === 0) return;
				const newIdx =
					historyIdx === -1
						? history.length - 1
						: Math.max(0, historyIdx - 1);
				setHistoryIdx(newIdx);
				setInput(history[newIdx]);
				return;
			}

			if (event.key === "ArrowDown") {
				event.preventDefault();
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

			if (event.key === "Enter") {
				event.preventDefault();
				processInput(input);
			}
		},
		[handleTab, history, historyIdx, input, processInput],
	);

	const handleTextareaKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (event.key === "Enter" && !event.shiftKey) {
				event.preventDefault();
				handleMessageSubmit(input);
			}
		},
		[handleMessageSubmit, input],
	);

	const handleContainerClick = useCallback(() => {
		if (phase === "message") {
			textareaRef.current?.focus();
		} else if (shouldFocusTextInput(phase)) {
			inputRef.current?.focus();
		}
	}, [phase]);

	const promptLabel = getPromptLabel(phase);
	const showInput = shouldShowTextInput(phase);
	const showTextarea = shouldShowTextarea(phase);

	return (
		<>
			<TerminalHiddenForm
				formRef={hiddenFormRef}
				formFields={formFields}
				service={service}
			/>

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

				<div
					ref={scrollRef}
					className="terminal-body flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
				>
					<TerminalLines lines={lines} />

					<TerminalInput
						input={input}
						phase={phase}
						promptLabel={promptLabel}
						showInput={showInput}
						showTextarea={showTextarea}
						inputRef={inputRef}
						textareaRef={textareaRef}
						onInputChange={setInput}
						onInputKeyDown={handleKeyDown}
						onTextareaKeyDown={handleTextareaKeyDown}
					/>

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
