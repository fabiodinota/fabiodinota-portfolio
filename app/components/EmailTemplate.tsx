interface EmailData {
    type: string;
    name: string;
    email: string;
    subject: string;
    budget: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailData>> = ({
    type,
    name,
    email,
    subject,
    budget,
    message,
}) => (
    <div className="bg-gray-100 p-8">
        <div className="bg-white p-6 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">{subject}</h1>
            <p className="mb-2"><span className="font-bold">Type:</span> {type}</p>
            <p className="mb-2"><span className="font-bold">Name:</span> {name}</p>
            <p className="mb-2"><span className="font-bold">Email:</span> {email}</p>
            <p className="mb-2"><span className="font-bold">Budget:</span> {budget}</p>
            <p className="mb-2"><span className="font-bold">Message:</span></p>
            <p className="pl-4">{message}</p>
        </div>
    </div>
);
