import { Box, Tooltip, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { blue } from '../common/theme';

// Aperçu affiché au survol de l'œil
// Une capture de page + défilemment
const Preview = ({ project }) => (
	<Box sx={{ position: 'relative' }}>
		<Box
			component="img"
			src={project.image}
			alt={project.imageAlt}
			sx={{
				display: 'block',
				width: '100%',
				borderRadius: '10px',
				...(project.scrollImage && {
					height: { xs: 260, md: 340 },
					objectFit: 'cover',
					objectPosition: '50% 0%',
					animation: 'scrollPage 9s ease 0.2s infinite alternate',
					'@keyframes scrollPage': {
						to: { objectPosition: '50% 100%' },
					},
				}),
			}}
		/>
		{project.secondImage && (
			<Box
				component="img"
				src={project.secondImage}
				alt={project.secondImageAlt}
				sx={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					borderRadius: '10px',
					opacity: 0,
					animation: 'switchPage 5s ease-in-out infinite',
					'@keyframes switchPage': {
						'0%, 18%': { opacity: 0 },
						'28%, 85%': { opacity: 1 },
						'100%': { opacity: 0 },
					},
				}}
			/>
		)}
	</Box>
);

// Bouton œil
export default function ProjectPreview({ project }) {
	return (
		<Tooltip
			title={<Preview project={project} />}
			placement="bottom-start"
			enterTouchDelay={0}
			leaveTouchDelay={6000}
			slotProps={{
				tooltip: {
					sx: {
						p: 0.75,
						maxWidth: 'none',
						width: { xs: '88vw', sm: 520 },
						background: 'rgba(255,255,255,0.85)',
						backdropFilter: 'blur(12px)',
						border: '2px solid rgba(255, 255, 255, 0.78)',
						borderRadius: '12px',
						boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
					},
				},
			}}
		>
			<IconButton
				aria-label={`Preview: ${project.imageAlt}`}
				sx={{
					color: blue,
					background: 'rgba(255,255,255,0.5)',
					border: '1px solid rgba(19, 61, 73, 0.2)',
					transition: 'all 0.3s ease',
					'&:hover': { background: '#ffffff', transform: 'scale(1.08)' },
				}}
			>
				<VisibilityOutlinedIcon />
			</IconButton>
		</Tooltip>
	);
}
