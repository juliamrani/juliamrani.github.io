import { Box, Typography, Container } from '@mui/material';
import PhotoHome7 from '../../../assets/PhotoHome7.jpg';
import SectionTitle from '../common/SectionTitle';
import { blue } from '../common/theme';
import JourneyStep from './JourneyStep';
import { intro, steps } from './journeyData';

// Section « My Journey » : une frise des étapes de mon parcours, sur la photo en fond.
// Les textes sont dans journeyData.js.
export default function Journey() {
	return (
		<Box id="journey">
			<SectionTitle sx={{ mt: 20, px: { xs: 2, md: 14 } }}>My Journey</SectionTitle>

			<Box sx={{ py: 4, mb: 8 }}>
				<Container>
					<Typography
						sx={{
							color: blue,
							lineHeight: 1.9,
							fontSize: '1.05rem',
							maxWidth: '600px',
							textAlign: 'center',
							fontFamily: 'Space Mono',
							mx: 'auto',
						}}
					>
						{intro}
					</Typography>

					<Box
						sx={{
							width: { xs: '95vw', md: '105vh' },
							maxWidth: '90%',
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.11),rgba(0, 0, 0, 0.11)),url(${PhotoHome7})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
							borderRadius: '10px',
							mt: 8,
							mx: 'auto',
							py: { xs: 3, md: 5 },
							px: { xs: 2, md: 5 },
						}}
					>
						{steps.map((step, i) => (
							<JourneyStep key={step.title} step={step} isLast={i === steps.length - 1} />
						))}
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
