import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { years } from './projectsData';
import YearTabs from './YearTabs';
import ProjectSlider from './ProjectSlider';

const MotionDiv = motion.div;
const MotionSpan = motion.span;

// Changement d'année : fondu enchaîné. Les nouvelles cartes apparaissent par-dessus les anciennes,
// qui s'effacent en même temps : pas de vide, et la section garde sa hauteur
const ease = [0.25, 0.1, 0.25, 1];
const slide = {
	enter: { opacity: 0, y: 16 },
	center: ({ reduceMotion }) => ({
		opacity: 1,
		y: 0,
		transition: reduceMotion ? { duration: 0 } : { duration: 0.8, ease, delay: 0.3 },
	}),
	exit: ({ reduceMotion }) => ({
		opacity: 0,
		y: -8,
		transition: reduceMotion ? { duration: 0 } : { duration: 0.35, ease },
	}),
};

// Section « Projects »
// Contenu des projets dans projectsData.js
export default function Projects() {
	// 1 = « 2nd year · Data & AI », affiché par défaut
	const [year, setYear] = useState(1);
	const reduceMotion = useReducedMotion();
	const current = years[year];

	const intro = (
		<AnimatePresence mode="wait" initial={false}>
			<MotionSpan
				key={year}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: reduceMotion ? 0 : 0.4 }}
				style={{ display: 'block' }}
			>
				{current.intro}
			</MotionSpan>
		</AnimatePresence>
	);

	return (
		<Box id="projects" component="section" sx={{ py: { xs: 10, md: 14 }, overflowX: 'clip' }}>
			<Container maxWidth="lg">
				<SectionHeader number="02" label="Projects" title="What I've built" subtitle={intro} />

				<YearTabs years={years} value={year} onChange={setYear} />

				{/* Les deux années occupent la même case de la grille pendant la transition */}
				<Box sx={{ display: 'grid' }}>
					<AnimatePresence initial={false} custom={{ reduceMotion }}>
						{/* key : quand on change d'année, le slider repart du premier projet */}
						<MotionDiv
							key={year}
							custom={{ reduceMotion }}
							variants={slide}
							initial="enter"
							animate="center"
							exit="exit"
							style={{ gridArea: '1 / 1', minWidth: 0 }}
						>
							<ProjectSlider projects={current.projects} />
						</MotionDiv>
					</AnimatePresence>
				</Box>
			</Container>
		</Box>
	);
}
