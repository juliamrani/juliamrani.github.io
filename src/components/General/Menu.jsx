import { Box, Button, Divider } from '@mui/material';

export default function Menu() {
	const buttonStyle = {
		color: '#133d49',
		fontFamily: "'Bungee', cursive",
		fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
		lineHeight: 0.9,
		letterSpacing: '-0.01em',
		textTransform: 'none',
		// Sur mobile, un titre trop long (« My Journey ») passe sur deux lignes au lieu d'être coupé
		whiteSpace: { xs: 'normal', sm: 'nowrap' },
		textAlign: 'left',
		background: 'none',
		padding: 0,
		minWidth: 0,
		display: 'block',
		transition: 'color 0.18s ease',

		'&:hover': {
			color: '#226c67',
			background: 'none',
		},
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				px: { xs: 3, sm: 6, md: 10 },
				py: { xs: 12, sm: 12, md: 16 },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: { xs: 1, sm: 2, md: 3 },
				}}
			>
				<Button component="a" href="#about" sx={buttonStyle}>
					About
				</Button>

				<Button component="a" href="#projects" sx={buttonStyle}>
					Projects
				</Button>

				<Button component="a" href="#journey" sx={buttonStyle}>
					My Journey
				</Button>

				<Button component="a" href="#contact" sx={buttonStyle}>
					Contact
				</Button>
			</Box>

			<Divider
				sx={{
					borderColor: '#133d49',
					opacity: 0.3,
					mt: 12,
				}}
			/>
		</Box>
	);
}
