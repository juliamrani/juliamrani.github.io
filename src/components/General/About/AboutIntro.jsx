import { Box, Typography } from '@mui/material';
import Photo2 from '/src/assets/Photo2.png';
import { blue, darkBlue } from '../common/theme';
import { intro } from './aboutData';

// Photo, nom et texte de présentation
export default function AboutIntro() {
	return (
		// Photo et texte côte à côte sur écran moyen, l'un sous l'autre sur grand écran (colonne) et sur mobile
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row', md: 'column' },
				alignItems: { xs: 'flex-start', sm: 'center', md: 'flex-start' },
				gap: { xs: 4, sm: 5, md: 4 },
			}}
		>
			<Box
				component="img"
				alt={intro.name}
				src={Photo2}
				sx={{
					display: 'block',
					flexShrink: 0,
					width: { xs: 200, md: 260 },
					borderRadius: '20px',
					boxShadow: '0 20px 50px rgba(17, 49, 58, 0.3)',
				}}
			/>

			<Box>
				<Typography
					component="h3"
					sx={{
						fontFamily: 'Montserrat',
						fontWeight: 700,
						color: darkBlue,
						fontSize: { xs: '1.6rem', md: '2rem' },
					}}
				>
					{intro.name}
				</Typography>
				<Typography
					sx={{
						mt: 2,
						color: blue,
						lineHeight: 1.9,
						fontFamily: 'Space Mono',
						fontSize: { xs: '0.9rem', md: '0.98rem' },
					}}
				>
					{intro.text}
				</Typography>
			</Box>
		</Box>
	);
}
