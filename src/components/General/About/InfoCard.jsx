import { Fragment } from 'react';
import { Typography } from '@mui/material';
import GlassCard from '../common/GlassCard';
import { CardSubtitle, CardLabel, CardText } from '../common/CardTypography';
import { blue } from '../common/theme';

// Carte d'une formation ou d'une expérience : nom, dates, intertitre optionnel, liste de points
export default function InfoCard({ item, titleSize }) {
	return (
		<GlassCard>
			<Typography
				fontWeight={700}
				fontSize={titleSize}
				color={blue}
				fontFamily={'Montserrat'}
			>
				{item.title}
			</Typography>
			<CardSubtitle>{item.subtitle}</CardSubtitle>

			{item.label && <CardLabel>{item.label}</CardLabel>}

			<CardText>
				{item.lines.map((line, i) => (
					<Fragment key={i}>
						{i > 0 && <br />}
						{`• ${line}`}
					</Fragment>
				))}
			</CardText>
		</GlassCard>
	);
}
