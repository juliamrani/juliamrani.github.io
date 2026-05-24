import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Box, Typography, Container, TextField, Button, Paper, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BoutonCV from "./BoutonCV";

const blue = "#133d49";

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

	const [open, setOpen] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
	e.preventDefault();

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

		const data = await response.json();

		console.log("Formspree response:", data);

		if (response.ok) {
		setOpen(true);
		setForm({ name: "", email: "", message: "" });
		} else {
		console.error("Erreur :", data);
		}
	} catch (error) {
		console.error("Erreur :", error);
	}
	};

	return (
		<Box id="contact" sx={{ mb: 0}}>
			<Typography
			sx={{
				display: "flex",
				justifyContent: "center",
				fontFamily: "Montserrat",
				fontWeight: 800,
				mt: 20,
				px: 14,
				color: "#11313a",
				fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem" },
			}}
			>
			Contact
			</Typography>

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
				Don't hesitate to send me a message !
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
						}}
						>
						Send
						</Button>

						<BoutonCV />
					</Box>
				</Box>
				</GlassCard>
			</Container>
			</Box>

			<Snackbar
			open={open}
			autoHideDuration={4000}
			onClose={() => setOpen(false)}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => setOpen(false)}
					severity="success"
					sx={{ fontFamily: "Space Mono", borderRadius: "8px" }}
				>
					Message sent successfully!
				</Alert>
			</Snackbar>
		</Box>
	);
}