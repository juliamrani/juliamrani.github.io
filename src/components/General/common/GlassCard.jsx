import { Paper } from '@mui/material';

// Carte en « verre dépoli ». Les couleurs au survol changent selon la section.
export default function GlassCard({
	children,
	hoverBackground = 'rgba(255,255,255,0.8)',
	hoverBorder = '#ffffff',
}) {
	return (
		<Paper
			elevation={0}
			sx={{
				p: 4,
				background: 'rgba(255,255,255,0.6)',
				backdropFilter: 'blur(12px)',
				border: '2px solid rgba(255, 255, 255, 0.78)',
				borderRadius: '10px',
				transition: 'all 0.4s ease',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: '0 20px 60px rgba(34, 35, 42, 0.1)',
					background: hoverBackground,
					borderColor: hoverBorder,
				},
			}}
		>
			{children}
		</Paper>
	);
}
