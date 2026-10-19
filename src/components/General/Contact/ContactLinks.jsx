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
					underline="none"
					{...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						color: blue,
						fontFamily: "Space Mono",
						fontSize: { xs: "0.85rem", sm: "0.95rem" },
						textUnderlineOffset: "3px",
						transition: "transform 0.3s ease, text-shadow 0.3s ease",
						// Au survol : le lien se soulève légèrement, sans changer de couleur
						"&:hover": {
							transform: "translateY(-3px)",
							textShadow: "0 6px 14px rgba(19, 61, 73, 0.25)",
						},
					}}
				>
					{link.icon}
					{link.label}
				</Link>
			))}
		</Box>
	);
}
