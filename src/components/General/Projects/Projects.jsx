import { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import { blue } from '../common/theme';
import { years } from './projectsData';
import YearTabs from './YearTabs';
import ProjectCard from './ProjectCard';

// Section « Projects » 
// Contenu des projets dans projectsData.js
export default function Projects() {
	// 1 = « 2nd year · Data & AI », affiché par défaut
	const [year, setYear] = useState(1);
	const current = years[year];

	return (
		<Box id="projects">
			<SectionTitle sx={{ mt: 20, px: { xs: 2, md: 14 } }}>Projects</SectionTitle>

			<Box sx={{ py: 4 }}>
				<Container>
					<YearTabs years={years} value={year} onChange={setYear} />

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
						{current.intro}
					</Typography>

					{current.projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</Container>
			</Box>
		</Box>
	);
}
