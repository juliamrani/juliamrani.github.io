import { useRef, useState, useLayoutEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { blue, darkBlue, teal } from '../common/theme';
import ProjectCard from './ProjectCard';

const MotionDiv = motion.div;

const GAP = 24;
const spring = { type: 'spring', stiffness: 260, damping: 32 };

// Flèches sur les côtés de la carte, sans cercle autour
const arrowSx = {
	position: 'absolute',
	top: '50%',
	zIndex: 3,
	display: 'flex',
	p: { xs: 0.5, md: 1 },
	color: darkBlue,
	transform: 'translate(-50%, -50%)',
	transition: 'transform 0.3s ease, color 0.3s ease, opacity 0.3s ease',
	'&:hover': { background: 'transparent', color: teal },
	'& svg': { fontSize: { xs: '1.4rem', md: '2rem' } },
	'&.Mui-disabled': { opacity: 0, pointerEvents: 'none' },
};

// Les projets en slides : la carte active est centrée, les projets voisins dépassent de chaque côté,
// on passe de l'un à l'autre avec les flèches, le clavier, ou en faisant glisser la carte
export default function ProjectSlider({ projects }) {
	const viewportRef = useRef(null);
	const dragging = useRef(false);
	const [width, setWidth] = useState(0);
	const [current, setCurrent] = useState(0);
	const [openIndex, setOpenIndex] = useState(null);
	const reduceMotion = useReducedMotion();

	// useLayoutEffect : la largeur est connue avant le premier affichage, les cartes n'apparaissent pas écrasées
	useLayoutEffect(() => {
		setWidth(viewportRef.current.getBoundingClientRect().width);
		const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
		observer.observe(viewportRef.current);
		return () => observer.disconnect();
	}, []);

	const slideWidth = width * 0.8;
	const step = slideWidth + GAP;
	// La carte active est toujours centrée ; les flèches se placent dans l'espace libre de chaque côté
	const offset = (width - slideWidth) / 2;
	const last = projects.length - 1;

	// Changer de projet referme le détail « See my contribution »
	const goTo = (index) => {
		const next = Math.max(0, Math.min(last, index));
		if (next !== current) setOpenIndex(null);
		setCurrent(next);
	};

	const onDragEnd = (_, info) => {
		const swipe = info.offset.x + info.velocity.x * 0.2;
		if (swipe < -slideWidth / 4) goTo(current + 1);
		else if (swipe > slideWidth / 4) goTo(current - 1);
		setTimeout(() => {
			dragging.current = false;
		}, 0);
	};

	const onKeyDown = (e) => {
		if (e.key === 'ArrowRight') goTo(current + 1);
		if (e.key === 'ArrowLeft') goTo(current - 1);
	};

	return (
		<Box
			role="region"
			aria-roledescription="carousel"
			aria-label="Projects"
			tabIndex={0}
			onKeyDown={onKeyDown}
			sx={{ outline: 'none' }}
		>
			<Box ref={viewportRef} sx={{ position: 'relative' }}>
				<IconButton
					aria-label="Previous project"
					onClick={() => goTo(current - 1)}
					disabled={current === 0}
					disableRipple
					sx={{ ...arrowSx, left: offset / 2, '&:hover': { ...arrowSx['&:hover'], transform: 'translate(calc(-50% - 4px), -50%)' } }}
				>
					<ArrowBackIosNewRoundedIcon />
				</IconButton>
				<IconButton
					aria-label="Next project"
					onClick={() => goTo(current + 1)}
					disabled={current === last}
					disableRipple
					sx={{ ...arrowSx, left: width - offset / 2, '&:hover': { ...arrowSx['&:hover'], transform: 'translate(calc(-50% + 4px), -50%)' } }}
				>
					<ArrowForwardIosRoundedIcon />
				</IconButton>

				<MotionDiv
					drag={width ? 'x' : false}
					dragConstraints={{ left: offset - last * step, right: offset }}
					dragElastic={0.12}
					onDragStart={() => {
						dragging.current = true;
					}}
					onDragEnd={onDragEnd}
					animate={{ x: offset - current * step }}
					transition={reduceMotion ? { duration: 0 } : spring}
					style={{
						display: 'flex',
						gap: GAP,
						// Cartes fermées : même hauteur pour toutes. Détail ouvert : seule cette carte s'agrandit
						alignItems: openIndex === null ? 'stretch' : 'flex-start',
						cursor: 'grab',
					}}
					whileDrag={{ cursor: 'grabbing' }}
				>
					{projects.map((project, i) => (
						<MotionDiv
							key={project.title}
							role="group"
							aria-roledescription="slide"
							aria-label={`${i + 1} of ${projects.length}`}
							aria-hidden={i !== current}
							onClickCapture={(e) => {
								// Un clic sur une carte voisine l'amène au centre
								if (dragging.current || i !== current) {
									e.stopPropagation();
									e.preventDefault();
									if (!dragging.current) goTo(i);
								}
							}}
							animate={{ scale: i === current ? 1 : 0.94 }}
							transition={reduceMotion ? { duration: 0 } : spring}
							style={{
								flex: `0 0 ${slideWidth || 0}px`,
								transformOrigin: i < current ? 'right center' : 'left center',
								cursor: i === current ? 'grab' : 'pointer',
							}}
						>
							<ProjectCard
								project={project}
								index={i}
								dimmed={i !== current}
								open={openIndex === i}
								onToggle={() => setOpenIndex(openIndex === i ? null : i)}
							/>
						</MotionDiv>
					))}
				</MotionDiv>
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, mt: 4 }}>
				<Typography sx={{ fontFamily: 'Space Mono', color: teal, fontSize: '0.9rem', minWidth: 64 }}>
					{String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
				</Typography>

				<Box
					sx={{
						position: 'relative',
						flex: 1,
						maxWidth: 260,
						height: 2,
						borderRadius: '999px',
						background: 'rgba(19, 61, 73, 0.18)',
						overflow: 'hidden',
					}}
				>
					<MotionDiv
						animate={{ width: `${((current + 1) / projects.length) * 100}%` }}
						transition={reduceMotion ? { duration: 0 } : spring}
						style={{ position: 'absolute', inset: 0, right: 'auto', background: blue, borderRadius: 999 }}
					/>
				</Box>
			</Box>
		</Box>
	);
}
