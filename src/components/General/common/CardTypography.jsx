import { Typography } from '@mui/material';
import { blue } from './theme';

// Textes utilisés dans les cartes et les sous-sections

// Titre d'une sous-section ou d'un projet (« Academic Background », « E-Todo »…)
export const CardTitle = ({ children }) => (
	<Typography
		sx={{
			fontFamily: 'Montserrat',
			fontWeight: 700,
			color: blue,
			fontSize: {
				xs: '1.5rem',
				sm: '2rem',
				md: '2.2rem',
			},
		}}
	>
		{children}
	</Typography>
);

// Ligne grise sous un titre de carte (dates, description du projet)
export const CardSubtitle = ({ children, sx }) => (
	<Typography
		color="text.secondary"
		fontFamily={'Montserrat'}
		sx={{
			fontSize: {
				xs: '0.85rem',
				sm: '1rem',
				md: '1.1rem',
			},
			...sx,
		}}
	>
		{children}
	</Typography>
);

// Petit intertitre dans une carte (« My contribution », « What I learned... »)
export const CardLabel = ({ children }) => (
	<Typography
		fontWeight={600}
		fontFamily={'Montserrat'}
		sx={{
			mt: 3,
			fontSize: {
				xs: '0.9rem',
				sm: '1rem',
				md: '1.1rem',
			},
		}}
	>
		{children}
	</Typography>
);

// Texte courant d'une carte, en Space Mono
export const CardText = ({ children }) => (
	<Typography
		component="div"
		mt={2}
		lineHeight={1.8}
		fontFamily={'Space Mono'}
		sx={{
			fontSize: {
				xs: '0.75rem',
				sm: '0.8rem',
				md: '0.88rem',
			},
		}}
	>
		{children}
	</Typography>
);
