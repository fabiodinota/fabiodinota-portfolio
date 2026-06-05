import type React from "react";
import type { ContactFormFields } from "@/tests/fixtures/contact-terminal/terminal-types";

interface TerminalHiddenFormProps {
	formRef: React.RefObject<HTMLFormElement | null>;
	formFields: ContactFormFields;
	service: string;
}

export function TerminalHiddenForm({
	formRef,
	formFields,
	service,
}: TerminalHiddenFormProps) {
	return (
		<form
			ref={formRef}
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
	);
}
