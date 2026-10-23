import { useState } from "react";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CheckIcon from "@mui/icons-material/Check";
import { downloadCv } from "../common/downloadCv";


export default function BoutonCV() {
	const [downloaded, setDownloaded] = useState(false);

	const handleDownload = () => {
		downloadCv();

		setDownloaded(true);
		setTimeout(() => setDownloaded(false), 3000);
	};

	return (
		<Button
			onClick={handleDownload}
			variant="outlined"
			endIcon={
			downloaded ? (
				<CheckIcon sx={{ fontSize: "1rem !important" }} />
			) : (
				<DownloadIcon sx={{ fontSize: "1rem !important" }} />
			)
			}
			sx={{
				fontFamily: "'Bungee', cursive",
				fontWeight: 600,
				fontSize: "0.85rem",
				border: "none",
				px: 4,
				py: 1.2,
				borderRadius: "8px",
				textTransform: "none",
				transition: "all 0.5s ease",
				color: downloaded ? "#ffffff" : "#ffffff",
				background: downloaded
				? "linear-gradient(135deg, #2e7d5e, #1a4d3a)"
				: "linear-gradient(135deg, #0b3a5b, #021b2b)",
				"&:hover": {
				transform: "translateY(-2px)",
				background: downloaded
					? "linear-gradient(#3a9e78, #1a4d3a)"
					: "linear-gradient(#0e4c6d, #064057)",
					boxShadow: "0 8px 24px rgba(19, 61, 73, 0.25)",
				},
			}}
		>
			{downloaded ? "Downloaded!" : (
			<>
				<Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
					Download my CV
				</Box>
				<Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
					My CV
				</Box>
			</>
			)}
		</Button>
	);
}