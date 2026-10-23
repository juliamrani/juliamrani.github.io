import { motion, useReducedMotion } from 'framer-motion';

const MotionDiv = motion.div;

// Fait apparaître son contenu en douceur quand il arrive à l'écran
export default function Reveal({ children, delay = 0 }) {
	const reduceMotion = useReducedMotion();

	return (
		<MotionDiv
			initial={reduceMotion ? false : { opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
		>
			{children}
		</MotionDiv>
	);
}
