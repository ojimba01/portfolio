const author = "Olayinka Jimba";
const description =
	"1st Generation Nigerian Software Engineer from New Jersey who loves to develop no matter the stack :)";
const url = "https://olayinka.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://olayinka.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Olayinka Jimba",
		"Olayinka Jimba - software engineer",
		"Python developer",
		"Go developer",
		"Golang developer",
		"DevOps engineer",
		"Portfolio website",
		"Backend Engineer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://olayinka.vercel.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://olayinka.vercel.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
