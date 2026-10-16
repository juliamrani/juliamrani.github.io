import { Typography } from '@mui/material';
import { darkBlue } from './theme';

// Grand titre de section : « About », « Projects »…
export default function SectionTitle({ children, sx }) {
	return (
		<Typography
			sx={{
				display: 'flex',
				justifyContent: 'center',
				fontFamily: 'Montserrat',
				fontWeight: 800,
				px: 14,
				color: darkBlue,
				fontSize: {
					xs: '3.5rem',
					sm: '5rem',
					md: '7rem',
				},
				...sx,
			}}
		>
			{children}
		</Typography>
	);
}
