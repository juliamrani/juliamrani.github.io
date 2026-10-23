import { Box, Container, Typography } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import Reveal from '../common/Reveal';
import { teal } from '../common/theme';
import AboutIntro from './AboutIntro';
import InfoCard from './InfoCard';
import Skills from './Skills';
import { education, experiences } from './aboutData';

const ColumnTitle = ({ children }) => (
	<Typography
		sx={{
			mb: 2,
			fontFamily: 'Space Mono',
			fontSize: '0.8rem',
			letterSpacing: '0.15em',
			textTransform: 'uppercase',
			color: teal,
		}}
	>
		{children}
	</Typography>
);

// Section « About » : titre et présentation à gauche, formations et expériences à droite, puis compétences.
// Les textes sont dans aboutData.js.
export default function About() {
	return (
		<Box id="about" component="section" sx={{ py: { xs: 10, md: 14 } }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
						gap: { xs: 7, md: 8 },
						alignItems: 'start',
					}}
				>
					{/* Le titre est dans la colonne de gauche, au même niveau que la colonne de droite (comme Contact) */}
					<Box>
						<SectionHeader number="01" label="About" title="Who I am" />
						<Reveal>
							<AboutIntro />
						</Reveal>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
						<Reveal delay={0.1}>
							<ColumnTitle>Academic background</ColumnTitle>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
								{education.map((item) => (
									<InfoCard key={item.title} item={item} />
								))}
							</Box>
						</Reveal>

						<Reveal delay={0.2}>
							<ColumnTitle>Professional experiences</ColumnTitle>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
								{experiences.map((item) => (
									<InfoCard key={item.title} item={item} />
								))}
							</Box>
						</Reveal>
					</Box>
				</Box>

				<Skills />
			</Container>
		</Box>
	);
}
