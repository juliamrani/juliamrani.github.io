import { Paper } from '@mui/material';

// Carte en « verre dépoli ».
// Au survol : elle se soulève, un reflet lumineux apparaît en haut à gauche,
// et un éclat traverse la carte.
export default function GlassCard({ children, sx }) {
	return (
		<Paper
			elevation={0}
			sx={{
				position: 'relative',
				top: 0,
				overflow: 'hidden',
				p: 4,
				background: 'rgba(255, 255, 255, 0.32)',
				// Pas de « backdrop-filter » : derrière ces cartes il n'y a que le dégradé, le flou ne se verrait pas,
				// et il fait sauter la couleur ou flouter le texte pendant les animations
				border: '1px solid rgba(255, 255, 255, 0.5)',
				borderRadius: '20px',
				boxShadow: '0 8px 32px rgba(19, 61, 73, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
				transition:
					'top 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.45s ease, border-color 0.45s ease, background 0.45s ease',

				// Le contenu passe au-dessus des reflets
				'& > *': { position: 'relative', zIndex: 1 },

				// Reflet lumineux en haut à gauche
				'&::before': {
					content: '""',
					position: 'absolute',
					inset: 0,
					borderRadius: 'inherit',
					pointerEvents: 'none',
					background:
						'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.25) 40%, rgba(255, 255, 255, 0) 65%)',
					opacity: 0,
					transition: 'opacity 0.45s ease',
				},

				// Éclat qui traverse la carte (seulement à l'arrivée de la souris)
				'&::after': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: '-45%',
					width: '40%',
					height: '100%',
					pointerEvents: 'none',
					background:
						'linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
					transform: 'skewX(-15deg)',
					// Penché depuis le haut : l'éclat reste hors de la carte au repos, même sur une carte haute
					transformOrigin: 'top left',
				},

				// La carte monte avec « top » et non « transform » : le texte reste net
				'&:hover': {
					top: '-8px',
					background: 'rgba(255, 255, 255, 0.6)',
					borderColor: 'rgba(255, 255, 255, 0.95)',
					boxShadow: '0 28px 60px rgba(19, 61, 73, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1)',
				},
				'&:hover::before': { opacity: 1 },
				'&:hover::after': { left: 'calc(100% + 220px)', transition: 'left 0.9s ease' },

				// Animations désactivées si le visiteur a choisi « réduire les animations »
				'@media (prefers-reduced-motion: reduce)': {
					transition: 'none',
					'&:hover': { top: 0 },
					'&::after': { display: 'none' },
				},
				...sx,
			}}
		>
			{children}
		</Paper>
	);
}
