import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { downloadCv } from './common/downloadCv';
import { blue, darkBlue } from './common/theme';

const links = [
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'journey', label: 'Journey' },
	{ id: 'contact', label: 'Contact' },
];

// Barre de navigation fixe : elle apparaît une fois le haut de page dépassé
// et met en avant la section en cours de lecture
export default function NavBar() {
	const [visible, setVisible] = useState(false);
	const [active, setActive] = useState(null);

	useEffect(() => {
		// La section active est celle qui passe au niveau du milieu de l'écran
		const onScroll = () => {
			setVisible(window.scrollY > window.innerHeight * 0.6);
			const line = window.innerHeight * 0.45;
			const section = links.find((link) => {
				const box = document.getElementById(link.id)?.getBoundingClientRect();
				return box && box.top <= line && box.bottom > line;
			});
			setActive(section ? section.id : null);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}, []);

	return (
		<Box
			component="nav"
			aria-label="Main navigation"
			sx={{
				position: 'fixed',
				top: { xs: 10, md: 16 },
				left: '50%',
				zIndex: 1100,
				display: 'flex',
				alignItems: 'center',
				gap: { xs: 0.5, md: 1 },
				px: { xs: 1, md: 1.5 },
				py: 0.75,
				maxWidth: 'calc(100vw - 20px)',
				borderRadius: '999px',
				background: 'rgba(248, 244, 227, 0.7)',
				backdropFilter: 'blur(14px) saturate(140%)',
				border: '1px solid rgba(255, 255, 255, 0.7)',
				boxShadow: '0 10px 30px rgba(17, 49, 58, 0.12)',
				transform: visible ? 'translate(-50%, 0)' : 'translate(-50%, -150%)',
				opacity: visible ? 1 : 0,
				transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease',
			}}
		>
			<Box
				component="a"
				href="#top"
				aria-label="Back to top"
				sx={{
					px: { xs: 1, md: 1.5 },
					fontFamily: "'Bungee', cursive",
					fontSize: { xs: '0.85rem', md: '1rem' },
					color: darkBlue,
					textDecoration: 'none',
				}}
			>
				JEA
			</Box>

			{links.map((link) => (
				<Box
					key={link.id}
					component="a"
					href={`#${link.id}`}
					aria-current={active === link.id ? 'true' : undefined}
					sx={{
						px: { xs: 1, md: 1.75 },
						py: 0.75,
						borderRadius: '999px',
						fontFamily: 'Space Mono',
						fontSize: { xs: '0.72rem', md: '0.85rem' },
						textDecoration: 'none',
						color: active === link.id ? '#ffffff' : blue,
						background: active === link.id ? blue : 'transparent',
						transition: 'background 0.3s ease, color 0.3s ease',
						'&:hover': { background: active === link.id ? blue : 'rgba(19, 61, 73, 0.08)' },
					}}
				>
					{link.label}
				</Box>
			))}

			<Button
				onClick={downloadCv}
				endIcon={<DownloadIcon sx={{ fontSize: '1rem !important' }} />}
				sx={{
					display: { xs: 'none', sm: 'inline-flex' },
					ml: 0.5,
					px: 2,
					borderRadius: '999px',
					textTransform: 'none',
					fontFamily: 'Space Mono',
					fontSize: '0.85rem',
					color: '#ffffff',
					background: darkBlue,
					'&:hover': { background: blue },
				}}
			>
				CV
			</Button>
		</Box>
	);
}
