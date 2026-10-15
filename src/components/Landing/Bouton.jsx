import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Bouton() {
	const navigate = useNavigate();

	return (
		<Button
			variant="contained"
			onClick={() => navigate('/home')}
			sx={{
				fontFamily: 'Space Mono',
				color: '#e3e1cf',
				padding: '12px 30px',
				borderRadius: '14px',
				textTransform: 'none',
				fontSize: {
					xs: '0.9rem',
					sm: '1.08rem',
					md: '1.2rem',
				},
				background: 'rgba(255,255,255,0.12)',
				backdropFilter: 'blur(10px)',
				border: '1px solid rgba(255,255,255,0.25)',
				transition: 'all 0.35s ease',
				'&:hover': {
					background: 'rgba(255,255,255,0.22)',
					transform: 'translateY(-2px) scale(1.02)',
					boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
				},
			}}
		>
			Dive in →
		</Button>
	);
}
