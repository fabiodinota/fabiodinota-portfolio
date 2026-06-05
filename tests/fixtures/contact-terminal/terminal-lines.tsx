import type { TerminalLine } from "@/tests/fixtures/contact-terminal/terminal-types";
import { cn } from "@/lib/utils";

export function TerminalLines({ lines }: { lines: TerminalLine[] }) {
	return lines.map((line) => (
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
	));
}
