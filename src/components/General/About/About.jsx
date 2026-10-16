import { Box, Container } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import AboutIntro from './AboutIntro';
import CardSection from './CardSection';
import Skills from './Skills';
import { education, experiences } from './aboutData';

// Section « About » : présentation, formations, expériences et compétences.
// Les textes sont dans aboutData.js.
export default function About() {
	return (
		<Box id="about">
			<SectionTitle>About</SectionTitle>

			<Box sx={{ py: 4 }}>
				<Container>
					<AboutIntro />

					<CardSection
						title="Academic Background"
						items={education}
						titleSize="1.2rem"
						hoverBackground="#ebead2bc"
						hoverBorder="#a49f5c"
					/>

					<CardSection
						title="Professional Experiences"
						items={experiences}
						titleSize="1.1rem"
						hoverBackground="#a6b7a2bc"
						hoverBorder="#4c6d44bc"
					/>

					<Skills />
				</Container>
			</Box>
		</Box>
	);
}
