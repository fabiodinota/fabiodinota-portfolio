interface EmailData {
	service: string;
	name: string;
	email: string;
	subject: string;
	message: string;
}

const serviceLabelMap: Record<string, string> = {
	"--web-app": "Full-Stack Web Application",
	"--ui-audit": "UI/UX Audit",
	"--consulting": "Technical Consulting",
};

export const EmailTemplate: React.FC<Readonly<EmailData>> = ({
	service,
	name,
	email,
	subject,
	message,
}) => (
	<div className="bg-gray-100 p-8">
		<div className="bg-white p-6 rounded shadow-lg">
			<h1 className="text-2xl font-bold mb-4">{subject}</h1>
			<p className="mb-2">
				<span className="font-bold">Service:</span>{" "}
				{serviceLabelMap[service] || service}
			</p>
			<p className="mb-2">
				<span className="font-bold">Name:</span> {name}
			</p>
			<p className="mb-2">
				<span className="font-bold">Email:</span> {email}
			</p>
			<p className="mb-2">
				<span className="font-bold">Message:</span>
			</p>
			<p className="pl-4 whitespace-pre-wrap">{message}</p>
		</div>
	</div>
);
