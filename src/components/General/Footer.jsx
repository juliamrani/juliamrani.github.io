import { Box, Container, Typography, Link } from '@mui/material';

const footerLink = {
	color: 'rgba(255, 255, 255, 0.85)',
	fontFamily: 'Space Mono',
	fontSize: '0.85rem',
	textDecoration: 'none',
	transition: 'color 0.3s ease',
	'&:hover': { color: '#ffffff' },
};

export default function Footer() {
	return (
		<Box component="footer" sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.25)' }}>
			<Container
				maxWidth="lg"
				sx={{
					py: 4,
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: { xs: 'flex-start', sm: 'center' },
					justifyContent: 'space-between',
					gap: 2,
				}}
			>
				<Typography sx={{ fontFamily: 'Space Mono', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.85)' }}>
					© {new Date().getFullYear()} Julia El Amrani · Built with React &amp; Vite
				</Typography>

				<Link href="#top" sx={footerLink}>
					Back to top ↑
				</Link>
			</Container>
		</Box>
	);
}
