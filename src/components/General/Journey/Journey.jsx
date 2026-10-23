import { Box, Container } from '@mui/material';
import PhotoHome7 from '../../../assets/PhotoHome7.jpg';
import SectionHeader from '../common/SectionHeader';
import JourneyStep from './JourneyStep';
import { intro, steps } from './journeyData';

// Section « My Journey » : une frise des étapes de mon parcours, sur la photo en fond.
// Les textes sont dans journeyData.js.
export default function Journey() {
	return (
		<Box id="journey" component="section" sx={{ py: { xs: 10, md: 14 } }}>
			<Container maxWidth="lg">
				<SectionHeader number="03" label="Journey" title="My Journey" subtitle={intro} />

				<Box
					sx={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.11),rgba(0, 0, 0, 0.11)),url(${PhotoHome7})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						boxShadow: '0 30px 70px rgba(17, 49, 58, 0.3)',
						borderRadius: '24px',
						py: { xs: 3, md: 6 },
						px: { xs: 2, md: 6 },
					}}
				>
					{steps.map((step, i) => (
						<JourneyStep key={step.title} step={step} isLast={i === steps.length - 1} />
					))}
				</Box>
			</Container>
		</Box>
	);
}
