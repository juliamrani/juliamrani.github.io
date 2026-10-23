import { Box, Typography, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GlassCard from '../common/GlassCard';
import { blue, darkBlue, teal } from '../common/theme';
import ProjectPreview from './ProjectPreview';
import TechBadges from './TechBadges';

// Une ligne de « My contribution » : texte simple, ou début en gras avec { label, text }
const ContributionItem = ({ item }) => (
	<Typography component="li" fontFamily={'Montserrat'} sx={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
		{typeof item === 'string' ? (
			item
		) : (
			<>
				<strong>{item.label}</strong> {item.text}
			</>
		)}
	</Typography>
);

// Un projet : numéro, titre, œil d'aperçu, description et badges.
// La contribution et les apprentissages se déplient au clic.
// open / onToggle : l'ouverture est gérée par le slider, qui la referme quand on change de projet
export default function ProjectCard({ project, index, open, onToggle, dimmed = false }) {
	const detailsId = `project-${index}-details`;

	return (
		<GlassCard sx={{ p: { xs: 3, md: 5 }, height: '100%', boxSizing: 'border-box' }}>
			<Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 3 } }}>
				<Typography
					sx={{
						fontFamily: 'Space Mono',
						color: teal,
						fontSize: { xs: '0.85rem', md: '1rem' },
						pt: { xs: 0.5, md: 1 },
					}}
				>
					{String(index + 1).padStart(2, '0')}
				</Typography>

				<Box sx={{ flex: 1, minWidth: 0 }}>
					<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1.5 }}>
						<Typography
							component="h3"
							sx={{
								fontFamily: 'Montserrat',
								fontWeight: 700,
								color: darkBlue,
								lineHeight: 1.25,
								fontSize: { xs: '1.3rem', md: '1.75rem' },
							}}
						>
							{project.title}
						</Typography>
						{(project.image || project.gallery) && <ProjectPreview project={project} />}
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
						{project.team && (
							<Typography
								sx={{
									fontFamily: 'Space Mono',
									fontSize: '0.8rem',
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
									color: teal,
								}}
							>
								{project.team}
							</Typography>
						)}
					</Box>

					<Typography
						fontFamily={'Montserrat'}
						sx={{
							mt: 2,
							maxWidth: 760,
							color: blue,
							lineHeight: 1.75,
							fontSize: { xs: '0.98rem', md: '1.08rem' },
						}}
					>
						{project.description}
					</Typography>

					<Box sx={{ mt: 3 }}>
						<TechBadges tech={project.tech} />
					</Box>

					<Button
						onClick={onToggle}
						aria-expanded={open}
						aria-controls={detailsId}
						endIcon={
							<ExpandMoreIcon
								sx={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'none' }}
							/>
						}
						sx={{
							mt: 3,
							ml: -1,
							px: 1,
							textTransform: 'none',
							fontFamily: 'Space Mono',
							fontWeight: 700,
							fontSize: '0.88rem',
							color: blue,
							'&:hover': { background: 'rgba(19, 61, 73, 0.06)' },
						}}
					>
						{open ? 'Hide details' : 'See my contribution'}
					</Button>

					<Collapse in={open} id={detailsId}>
						<Box
							sx={{
								mt: 2,
								display: 'grid',
								gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
								gap: { xs: 3, md: 5 },
							}}
						>
							<Box>
								<Typography fontWeight={600} fontFamily={'Montserrat'} sx={{ color: darkBlue }}>
									My contribution
								</Typography>
								<Box component="ul" sx={{ m: 0, mt: 1, pl: 2.5, color: 'text.secondary' }}>
									{project.contribution.map((item, i) => (
										<ContributionItem key={i} item={item} />
									))}
								</Box>
							</Box>

							<Box
								sx={{
									p: 2.5,
									borderRadius: '14px',
									background: 'rgba(255, 255, 255, 0.45)',
									borderLeft: `3px solid ${teal}`,
									alignSelf: 'start',
								}}
							>
								<Typography fontWeight={600} fontFamily={'Montserrat'} sx={{ color: darkBlue }}>
									What I learned
								</Typography>
								<Typography
									fontFamily={'Montserrat'}
									sx={{ mt: 1, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}
								>
									{project.learned}
								</Typography>
							</Box>
						</Box>
					</Collapse>
				</Box>
			</Box>
			{/* Voile des cartes voisines du slider : placé dans la carte pour se soulever avec elle.
			    On n'utilise pas l'opacité de la carte, qui désactiverait l'effet verre */}
			<Box
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					zIndex: 2,
					background: 'rgba(160, 196, 192, 0.6)',
					opacity: dimmed ? 1 : 0,
					transition: 'opacity 0.45s ease-out',
					pointerEvents: 'none',
				}}
			/>
		</GlassCard>
	);
}
