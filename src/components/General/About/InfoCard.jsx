import { Box, Typography } from '@mui/material';
import GlassCard from '../common/GlassCard';
import { blue, teal } from '../common/theme';

// Carte d'une formation ou d'une expérience : nom, dates, intertitre optionnel, liste de points
export default function InfoCard({ item }) {
	return (
		<GlassCard sx={{ p: { xs: 3, md: 3.5 } }}>
			<Typography
				fontWeight={700}
				fontFamily={'Montserrat'}
				sx={{ color: blue, fontSize: { xs: '1.05rem', md: '1.15rem' } }}
			>
				{item.title}
			</Typography>
			<Typography
				sx={{ mt: 0.5, fontFamily: 'Space Mono', fontSize: '0.8rem', color: teal }}
			>
				{item.subtitle}
			</Typography>

			{item.label && (
				<Typography
					fontWeight={600}
					fontFamily={'Montserrat'}
					sx={{ mt: 2, fontSize: '0.95rem', color: blue }}
				>
					{item.label}
				</Typography>
			)}

			<Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2.5, color: 'text.secondary' }}>
				{item.lines.map((line) => (
					<Typography
						key={line}
						component="li"
						fontFamily={'Montserrat'}
						sx={{ fontSize: '0.92rem', lineHeight: 1.7 }}
					>
						{line}
					</Typography>
				))}
			</Box>
		</GlassCard>
	);
}
