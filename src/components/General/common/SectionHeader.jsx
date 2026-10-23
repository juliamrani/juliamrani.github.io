import { Box, Typography } from '@mui/material';
import { blue, darkBlue, teal } from './theme';
import Reveal from './Reveal';

// En-tête de section : « 01 / About », le titre, puis une phrase d'intro.
// light : texte clair, pour les sections en bas de page où le fond est plus foncé
export default function SectionHeader({ number, label, title, subtitle, light = false }) {
	return (
		<Reveal>
			<Box sx={{ mb: { xs: 5, md: 7 } }}>
				<Typography
					sx={{
						fontFamily: 'Space Mono',
						fontSize: '0.85rem',
						letterSpacing: '0.2em',
						textTransform: 'uppercase',
						color: light ? 'rgba(255,255,255,0.8)' : teal,
					}}
				>
					{number} / {label}
				</Typography>

				<Typography
					component="h2"
					sx={{
						mt: 1,
						fontFamily: 'Montserrat',
						fontWeight: 800,
						lineHeight: 1.05,
						letterSpacing: '-0.02em',
						color: light ? '#ffffff' : darkBlue,
						fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' },
					}}
				>
					{title}
				</Typography>

				{subtitle && (
					<Typography
						sx={{
							mt: 2,
							maxWidth: 620,
							lineHeight: 1.8,
							fontFamily: 'Space Mono',
							fontSize: { xs: '0.9rem', md: '1rem' },
							color: light ? 'rgba(255,255,255,0.9)' : blue,
						}}
					>
						{subtitle}
					</Typography>
				)}
			</Box>
		</Reveal>
	);
}
