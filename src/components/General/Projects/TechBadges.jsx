import { Box, Chip } from '@mui/material';
import { blue } from '../common/theme';

// Badges des technos 
export default function TechBadges({ tech }) {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
			{tech.map((name) => (
				<Chip
					key={name}
					label={name}
					size="small"
					sx={{
						fontFamily: 'Space Mono',
						fontSize: '0.72rem',
						color: blue,
						background: 'rgba(140, 184, 181, 0.35)',
						border: '1px solid rgba(19, 61, 73, 0.2)',
					}}
				/>
			))}
		</Box>
	);
}
