import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Bouton from './Bouton';

const cream = '#e3e1cf';
const tagline =
	'Diving into the depths of data to turn it into clear insights and intelligent applications.';

// Apparition en cascade : chaque élément arrive l'un après l'autre
const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.35, delayChildren: 0.3 } },
};
const item = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

// Délai avant que la machine à écrire démarre (après l'arrivée du nom)
const TYPING_DELAY = 1400;
const TYPING_SPEED = 35;

function Typewriter({ text }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let interval;
		const start = setTimeout(() => {
			interval = setInterval(() => {
				setCount((c) => {
					if (c >= text.length) {
						clearInterval(interval);
						return c;
					}
					return c + 1;
				});
			}, TYPING_SPEED);
		}, TYPING_DELAY);
		return () => {
			clearTimeout(start);
			clearInterval(interval);
		};
	}, [text]);

	return (
		// Le texte complet invisible réserve la place : la page ne bouge pas pendant la frappe
		<Box component="span" sx={{ position: 'relative', display: 'block' }}>
			<Box component="span" sx={{ visibility: 'hidden' }} aria-hidden="true">
				{text}
			</Box>
			{/* Version lue par les lecteurs d'écran : la phrase entière, sans l'animation */}
			<Box
				component="span"
				sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
			>
				{text}
			</Box>
			<Box component="span" sx={{ position: 'absolute', inset: 0 }} aria-hidden="true">
				{text.slice(0, count)}
				<Box
					component="span"
					sx={{
						display: 'inline-block',
						width: '0.6em',
						height: '1.1em',
						ml: '2px',
						verticalAlign: 'text-bottom',
						background: cream,
						animation: 'blink 1s steps(1) infinite',
						'@keyframes blink': { '50%': { opacity: 0 } },
					}}
				/>
			</Box>
		</Box>
	);
}

export default function FirstPage() {
	return (
		<Box
			sx={{
				position: 'relative',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				overflow: 'hidden',
				px: 2,
				background: '#0a2a33',
			}}
		>
			<video
				autoPlay
				muted
				loop
				playsInline
				poster="/video1-poster.jpg"
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					zIndex: 0,
				}}
			>
				<source src="/video1.webm" type="video/webm" />
			</video>

			{/* Plus léger au centre, plus sombre sur les bords et en bas */}
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					zIndex: 1,
					background: `
						radial-gradient(ellipse at center, rgba(10,42,51,0.25) 0%, rgba(10,42,51,0.65) 100%),
						linear-gradient(rgba(10,42,51,0.1) 40%, rgba(10,42,51,0.75) 100%)`,
				}}
			/>

			<Box
				component={motion.div}
				variants={container}
				initial="hidden"
				animate="show"
				sx={{
					position: 'relative',
					zIndex: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 3,
					maxWidth: 760,
				}}
			>
				<motion.div variants={item}>
					<Typography
						sx={{
							fontFamily: 'Space Mono',
							color: cream,
							letterSpacing: '0.2em',
							textTransform: 'uppercase',
							fontSize: { xs: '0.7rem', sm: '0.85rem', md: '0.95rem' },
							px: 2,
							py: 0.75,
							border: '1px solid rgba(227,225,207,0.35)',
							borderRadius: '999px',
							background: 'rgba(255,255,255,0.06)',
							backdropFilter: 'blur(6px)',
						}}
					>
						EPITECH · Bachelor 2 · Data & AI
					</Typography>
				</motion.div>

				<motion.div variants={item}>
					<Typography
						variant="h1"
						sx={{
							fontFamily: "'Bungee', cursive",
							fontWeight: 700,
							color: cream,
							lineHeight: 1.05,
							textShadow: '0 4px 30px rgba(0,0,0,0.35)',
							fontSize: {
								xs: '2.6rem',
								sm: '3.6rem',
								md: '4.8rem',
							},
						}}
					>
						Julia El&nbsp;Amrani
					</Typography>
				</motion.div>

				<motion.div variants={item}>
					<Typography
						component="p"
						sx={{
							fontFamily: 'Space Mono',
							color: cream,
							fontSize: {
								xs: '0.9rem',
								sm: '1.15rem',
								md: '1.4rem',
							},
						}}
					>
						<Typewriter text={tagline} />
					</Typography>
				</motion.div>

				<motion.div variants={item}>
					<Bouton />
				</motion.div>
			</Box>
		</Box>
	);
}
