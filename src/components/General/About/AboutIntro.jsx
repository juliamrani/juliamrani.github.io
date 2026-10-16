import { Box, Typography, Grid } from '@mui/material';
import Photo2 from '/src/assets/Photo2.png';
import { blue } from '../common/theme';
import { intro } from './aboutData';

// Photo, nom et texte de présentation
export default function AboutIntro() {
	return (
		<Grid>
			<Grid
				xs={12}
				md={8}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					py: 3,
					px: 8,
					gap: 6,
					flexDirection: 'column',
					'@media (min-width:816px)': {
						flexDirection: 'row',
					},
				}}
			>
				<Box
					component="img"
					alt={intro.name}
					src={Photo2}
					sx={{
						width: { xs: 180, sm: 220, md: 280 },
						borderRadius: '10px',
						boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
					}}
				/>

				<Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
					<Typography
						component="h2"
						sx={{
							fontFamily: 'Montserrat',
							fontWeight: 700,
							color: blue,
							mb: 2,
							fontSize: {
								xs: '1.6rem',
								sm: '2rem',
								md: '2.4rem',
							},
						}}
					>
						{intro.name}
					</Typography>
					<Typography
						sx={{
							color: blue,
							lineHeight: 1.9,
							maxWidth: '600px',
							textAlign: 'center',
							fontFamily: 'Space Mono',
							fontSize: {
								xs: '0.9rem',
								sm: '1rem',
								md: '1.05rem',
							},
						}}
					>
						{intro.text}
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
