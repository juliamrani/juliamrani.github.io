import { Box, Link } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blue } from "../common/theme";

// Liens directs sous le formulaire, pour me contacter sans passer par le formulaire
const links = [
	{
		label: "jelamrani@hotmail.com",
		href: "mailto:jelamrani@hotmail.com",
		icon: <EmailOutlinedIcon fontSize="small" />,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/julia-el-amrani/",
		icon: <LinkedInIcon fontSize="small" />,
		external: true,
	},
];

export default function ContactLinks() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: { xs: 2, sm: 4 },
				mt: 5,
			}}
		>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					underline="hover"
					{...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						color: blue,
						fontFamily: "Space Mono",
						fontSize: { xs: "0.85rem", sm: "0.95rem" },
						textUnderlineOffset: "3px",
						transition: "color 0.3s ease",
						"&:hover": { color: "#226c67" },
					}}
				>
					{link.icon}
					{link.label}
				</Link>
			))}
		</Box>
	);
}
