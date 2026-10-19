import { Box, Grid } from '@mui/material';
import GlassCard from '../common/GlassCard';
import { CardTitle, CardSubtitle, CardLabel, CardText } from '../common/CardTypography';
import ProjectPreview from './ProjectPreview';
import TechBadges from './TechBadges';

// Une ligne de « My contribution » : texte simple, ou début en gras avec { label, text }
const ContributionItem = ({ item }) => (
	<Box sx={{ display: 'flex', gap: 1 }}>
		<span>•</span>
		<span>
			{typeof item === 'string' ? (
				item
			) : (
				<>
					<strong>{item.label}</strong> {item.text}
				</>
			)}
		</span>
	</Box>
);

// Un projet : titre (+ œil d'aperçu), puis la carte avec badges, description, contribution et apprentissages
export default function ProjectCard({ project }) {
	return (
		<Box mt={16}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<CardTitle>{project.title}</CardTitle>
				{project.image && <ProjectPreview project={project} />}
			</Box>

			<Grid container spacing={2} mt={4}>
				<Grid item xs={12} md={6}>
					<GlassCard>
						<TechBadges tech={project.tech} />

						<CardSubtitle sx={{ mt: 2 }}>
							<strong>Project description: </strong>
							{project.description}
						</CardSubtitle>

						<CardLabel>My contribution</CardLabel>
						<CardText>
							{project.contribution.map((item, i) => (
								<ContributionItem key={i} item={item} />
							))}
						</CardText>

						<CardLabel>What I learned...</CardLabel>
						<CardText>{project.learned}</CardText>
					</GlassCard>
				</Grid>
			</Grid>
		</Box>
	);
}
