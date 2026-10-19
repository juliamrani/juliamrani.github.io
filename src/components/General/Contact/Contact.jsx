import { useState } from "react";
import { Box, Typography, Container, TextField, Button, Paper, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BoutonCV from "./BoutonCV";
import ContactLinks from "./ContactLinks";
import SectionTitle from "../common/SectionTitle";
import { blue } from "../common/theme";

const GlassCard = ({ children }) => (
	<Paper
		elevation={0}
		sx={{
			p: { xs: 3, sm: 5 },
			background: "rgba(255,255,255,0.6)",
			backdropFilter: "blur(12px)",
			border: "2px solid rgba(255, 255, 255, 0.78)",
			borderRadius: "10px"
		}}
	>
	{children}
	</Paper>
);

const inputSx = {
	"& label": {
		fontFamily: "Space Mono",
		fontSize: "0.85rem",
		color: blue,
	},
	"& label.Mui-focused": {
		color: blue,
	},
	"& .MuiOutlinedInput-root": {
		fontFamily: "Space Mono",
		fontSize: "0.88rem",
		borderRadius: "8px",
		"& fieldset": {
		borderColor: "rgba(19, 61, 73, 0.3)",
		},
		"&:hover fieldset": {
		borderColor: blue,
		},
		"&.Mui-focused fieldset": {
		borderColor: blue,
		},
	},
};

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	// « sent » : message envoyé, « error » : échec de l'envoi
	const [status, setStatus] = useState(null);
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);

		try {
			const formData = new FormData();
			formData.append("name", form.name);
			formData.append("email", form.email);
			formData.append("message", form.message);

			const response = await fetch("https://formspree.io/f/maqkebyo", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
			});

			if (response.ok) {
				setStatus("sent");
				setForm({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		} finally {
			setSending(false);
		}
	};

	return (
		<Box id="contact" sx={{ mb: 0}}>
			<SectionTitle sx={{ mt: 20, px: { xs: 2, md: 14 } }}>Contact</SectionTitle>

			<Box sx={{ py: 4}}>
			<Container maxWidth="sm">
				<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: blue,
					lineHeight: 1.9,
					fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
					textAlign: "center",
					fontFamily: "Space Mono",
					mb: 6,
				}}
				>
				Looking for an intern for 4 months from April 2027, or just want
				to talk about data and AI? Send me a message!
				</Typography>

				<GlassCard>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ display: "flex", flexDirection: "column", gap: 3 }}
				>
					<TextField
					label="Your name"
					name="name"
					value={form.name}
					onChange={handleChange}
					required
					fullWidth
					sx={inputSx}
					/>

					<TextField
					label="Your email"
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					required
					fullWidth
					sx={inputSx}
					/>

					<TextField
					label="Your message"
					name="message"
					value={form.message}
					onChange={handleChange}
					required
					fullWidth
					multiline
					rows={5}
					sx={inputSx}
					/>

					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
						<Button
						type="submit"
						variant="contained"
						disabled={sending}
						endIcon={<SendIcon />}
						sx={{
							fontFamily: "'Bungee', cursive",
							fontWeight: 600,
							fontSize: "0.85rem",
							px: 4,
							py: 1.2,
							color: "#ffffff",
							background: 'linear-gradient(135deg, #0b3a5b, #021b2b)',
							borderRadius: "8px",
							textTransform: "none",
							transition: "all 0.5s ease",
							"&:hover": {
								transform: "translateY(-2px)",
								background: 'linear-gradient( #0e4c6d, #064057)',
								boxShadow: "0 8px 24px rgba(19, 61, 73, 0.25)",
							},
							"&.Mui-disabled": {
								color: "#ffffff",
								opacity: 0.7,
							},
						}}
						>
						{sending ? "Sending..." : "Send"}
						</Button>

						<BoutonCV />
					</Box>
				</Box>
				</GlassCard>

				<ContactLinks />
			</Container>
			</Box>

			<Snackbar
			open={status !== null}
			autoHideDuration={5000}
			onClose={() => setStatus(null)}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => setStatus(null)}
					severity={status === "error" ? "error" : "success"}
					sx={{ fontFamily: "Space Mono", borderRadius: "8px" }}
				>
					{status === "error"
						? "Something went wrong, your message was not sent. Please try again or email me directly."
						: "Message sent successfully!"}
				</Alert>
			</Snackbar>
		</Box>
	);
}