import { Box, Grid, Chip } from '@mui/material';
import { CardTitle } from '../common/CardTypography';
import { skills } from './aboutData';

// Liste des compétences sous forme de badges
export default function Skills() {
	return (
		<Box mt={16}>
			<CardTitle>Skills</CardTitle>

			<Grid container spacing={2} mt={4}>
				{skills.map((skill) => (
					<Grid item key={skill}>
						<Chip
							label={skill}
							sx={{
								background: 'linear-gradient(135deg, #68a2a1, #164c77)',
								color: '#fff',
								fontWeight: 500,
								fontFamily: 'Space Mono',
								px: 1.5,
								py: 2,
								borderRadius: '20px',
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
