import { ImageResponse } from "next/og";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export const runtime = "edge";

const size = {
	width: 1200,
	height: 630,
};

function truncate(value: string, maxLength: number) {
	if (value.length <= maxLength) return value;
	return `${value.slice(0, maxLength - 1).trim()}…`;
}

export function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const title = truncate(
		searchParams.get("title") || `${SITE_NAME} Portfolio`,
		82,
	);
	const description = truncate(
		searchParams.get("description") || DEFAULT_DESCRIPTION,
		150,
	);
	const label = truncate(searchParams.get("label") || SITE_NAME, 36);

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: "#111111",
					color: "#f7f2e9",
					padding: "64px",
					fontFamily: "system-ui, sans-serif",
					border: "2px solid #f7f2e9",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: 26,
						letterSpacing: 0,
					}}
				>
					<div>{label}</div>
					<div style={{ color: "#ff4d4d" }}>fabiodinota.com</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 28,
						maxWidth: 940,
					}}
				>
					<div
						style={{
							fontSize: 72,
							lineHeight: 1,
							fontWeight: 700,
							letterSpacing: 0,
						}}
					>
						{title}
					</div>
					<div
						style={{
							fontSize: 32,
							lineHeight: 1.35,
							color: "#c8c0b6",
							fontWeight: 300,
							letterSpacing: 0,
						}}
					>
						{description}
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						fontSize: 28,
						color: "#c8c0b6",
					}}
				>
					<div>Software Engineer & UI/UX Designer</div>
					<div style={{ color: "#ff4d4d", fontSize: 48 }}>.</div>
				</div>
			</div>
		),
		size,
	);
}
