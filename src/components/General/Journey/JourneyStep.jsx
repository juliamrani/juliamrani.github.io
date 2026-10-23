import { Box, Typography } from '@mui/material';
import { blue } from '../common/theme';

// Une étape de la frise : un point sur la ligne verticale et une carte en verre dépoli
export default function JourneyStep({ step, isLast }) {
	return (
		<Box sx={{ display: 'flex', gap: { xs: 2, md: 3 } }}>
			{/* Point et trait de la frise */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: 4.5,
				}}
			>
				<Box
					sx={{
						width: 14,
						height: 14,
						flexShrink: 0,
						borderRadius: '50%',
						background: '#ffffff',
						border: `3px solid ${blue}`,
					}}
				/>
				{!isLast && (
					<Box sx={{ flex: 1, width: 2, mt: 1, mb: -4.5, background: 'rgba(255,255,255,0.7)' }} />
				)}
			</Box>

			<Box
				sx={{
					flex: 1,
					mb: isLast ? 0 : 2,
					p: { xs: 3, md: 4 },
					background: 'rgba(255, 255, 255, 0.38)',
					backdropFilter: 'blur(12px)',
					border: '1px solid rgba(255, 255, 255, 0.5)',
					borderRadius: '16px',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Space Mono',
						fontSize: '0.8rem',
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
						color: blue,
					}}
				>
					{step.period}
				</Typography>

				<Typography
					fontWeight={600}
					fontFamily={'Montserrat'}
					sx={{
						mt: 1,
						color: blue,
						fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
					}}
				>
					{step.title}
				</Typography>

				<Typography
					component="div"
					color="text.secondary"
					fontFamily={'Montserrat'}
					sx={{
						mt: 1.5,
						lineHeight: 1.7,
						fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
					}}
				>
					{step.text}
					{step.lines?.map((line) => (
						<Box key={line.label} sx={{ display: 'flex', gap: 1, mt: 1 }}>
							<span>•</span>
							<span>
								<strong>{line.label}</strong> {line.text}
							</span>
						</Box>
					))}
					{step.contactLink && (
						<>
							{' '}
							<Box
								component="a"
								href="#contact"
								sx={{ color: blue, fontWeight: 600, textUnderlineOffset: '3px' }}
							>
								Feel free to contact me →
							</Box>
						</>
					)}
				</Typography>
			</Box>
		</Box>
	);
}
