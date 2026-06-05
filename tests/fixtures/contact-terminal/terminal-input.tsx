import type React from "react";
import type { TerminalPhase } from "@/tests/fixtures/contact-terminal/terminal-types";

interface TerminalInputProps {
	input: string;
	phase: TerminalPhase;
	promptLabel: string;
	showInput: boolean;
	showTextarea: boolean;
	inputRef: React.RefObject<HTMLInputElement | null>;
	textareaRef: React.RefObject<HTMLTextAreaElement | null>;
	onInputChange: (value: string) => void;
	onInputKeyDown: (event: React.KeyboardEvent) => void;
	onTextareaKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export function TerminalInput({
	input,
	phase,
	promptLabel,
	showInput,
	showTextarea,
	inputRef,
	textareaRef,
	onInputChange,
	onInputKeyDown,
	onTextareaKeyDown,
}: TerminalInputProps) {
	return (
		<>
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
						onChange={(event) => onInputChange(event.target.value)}
						onKeyDown={onInputKeyDown}
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
						onChange={(event) => onInputChange(event.target.value)}
						onKeyDown={onTextareaKeyDown}
						rows={3}
						spellCheck={false}
						autoComplete="off"
						aria-label="Enter your message"
					/>
				</div>
			)}
		</>
	);
}
