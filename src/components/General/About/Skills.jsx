import { Box, Typography, Chip } from '@mui/material';
import { blue, teal } from '../common/theme';
import Reveal from '../common/Reveal';
import { skills } from './aboutData';

// Compétences regroupées par thème
export default function Skills() {
	return (
		<Box
			sx={{
				mt: { xs: 8, md: 10 },
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
				gap: { xs: 4, md: 5 },
			}}
		>
			{skills.map((group, i) => (
				<Reveal key={group.title} delay={i * 0.1}>
					<Typography
						sx={{
							fontFamily: 'Space Mono',
							fontSize: '0.8rem',
							letterSpacing: '0.15em',
							textTransform: 'uppercase',
							color: teal,
							pb: 1.5,
							mb: 2,
							borderBottom: '1px solid rgba(19, 61, 73, 0.2)',
						}}
					>
						{group.title}
					</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						{group.items.map((skill) => (
							<Chip
								key={skill}
								label={skill}
								sx={{
									fontFamily: 'Space Mono',
									fontSize: '0.82rem',
									color: blue,
									background: 'rgba(255, 255, 255, 0.45)',
									border: '1px solid rgba(255, 255, 255, 0.7)',
									backdropFilter: 'blur(8px)',
									transition: 'transform 0.25s ease, background 0.25s ease',
									'&:hover': { transform: 'translateY(-2px)', background: 'rgba(255, 255, 255, 0.75)' },
								}}
							/>
						))}
					</Box>
				</Reveal>
			))}
		</Box>
	);
}
