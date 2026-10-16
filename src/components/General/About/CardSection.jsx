import { Box, Grid } from '@mui/material';
import { CardTitle } from '../common/CardTypography';
import InfoCard from './InfoCard';

// Sous-section avec un titre et des cartes deux par deux (formations, expériences)
export default function CardSection({ title, items, titleSize, hoverBackground, hoverBorder }) {
	return (
		<Box mt={16}>
			<CardTitle>{title}</CardTitle>

			<Grid container spacing={2} mt={4}>
				{items.map((item) => (
					<Grid item xs={12} md={6} key={item.title}>
						<InfoCard
							item={item}
							titleSize={titleSize}
							hoverBackground={hoverBackground}
							hoverBorder={hoverBorder}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
