import { Box, Container, Typography } from '@mui/material';
import { years } from './Projects/projectsData';
import { blue, teal } from './common/theme';
import Reveal from './common/Reveal';

const projectCount = years.reduce((total, year) => total + year.projects.length, 0);

const items = [
	{ number: '01', label: 'About', href: '#about', caption: 'Who I am, my background and skills' },
	{ number: '02', label: 'Projects', href: '#projects', caption: `${projectCount} projects, from web apps to machine learning` },
	{ number: '03', label: 'My Journey', href: '#journey', caption: 'Two years, one internship, and what comes next' },
	{ number: '04', label: 'Contact', href: '#contact', caption: 'Internship from April 2027, work-study from September 2027' },
];

// Grand menu : les mots sont en contour et se remplissent au survol
export default function Menu() {
	return (
		<Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
			{items.map((item, i) => (
				<Reveal key={item.href} delay={i * 0.08}>
					<Box
						component="a"
						href={item.href}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: { xs: 2, md: 4 },
							py: { xs: 1.5, md: 2 },
							textDecoration: 'none',
							borderBottom: `1px solid rgba(19, 61, 73, 0.18)`,

							'& .menu-word': {
								backgroundPosition: '100% 0',
							},
							'& .menu-caption': {
								opacity: 0,
								transform: 'translateX(-12px)',
							},
							'&:hover .menu-word, &:focus-visible .menu-word': {
								backgroundPosition: '0 0',
							},
							'&:hover .menu-caption, &:focus-visible .menu-caption': {
								opacity: 1,
								transform: 'translateX(0)',
							},
							'&:hover .menu-arrow': {
								transform: 'translateX(6px) rotate(-45deg)',
								color: teal,
							},
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Space Mono',
								color: teal,
								fontSize: { xs: '0.8rem', md: '1rem' },
								minWidth: { xs: 24, md: 36 },
							}}
						>
							{item.number}
						</Typography>

						<Typography
							className="menu-word"
							component="span"
							sx={{
								fontFamily: "'Bungee', cursive",
								fontSize: { xs: '2.8rem', sm: '4.5rem', md: '5.5rem', lg: '7rem' },
								lineHeight: 1,
								letterSpacing: '-0.01em',
								color: 'transparent',
								WebkitTextStroke: { xs: `1.5px ${blue}`, md: `2px ${blue}` },
								background: `linear-gradient(90deg, ${blue} 50%, transparent 50%)`,
								backgroundSize: '200% 100%',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								transition: 'background-position 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
								// Sur mobile, un mot trop long (« My Journey ») passe sur deux lignes
								whiteSpace: { xs: 'normal', sm: 'nowrap' },
							}}
						>
							{item.label}
						</Typography>

						<Typography
							className="menu-caption"
							sx={{
								// La légende n'apparaît que sur grand écran, où il y a la place à côté du mot
								display: { xs: 'none', lg: 'block' },
								flex: 1,
								minWidth: 0,
								fontFamily: 'Space Mono',
								color: blue,
								fontSize: '0.95rem',
								transition: 'opacity 0.4s ease, transform 0.4s ease',
							}}
						>
							{item.caption}
						</Typography>

						<Box
							className="menu-arrow"
							aria-hidden="true"
							sx={{
								ml: 'auto',
								fontFamily: 'Space Mono',
								fontSize: { xs: '1.4rem', md: '2rem' },
								color: blue,
								transition: 'transform 0.4s ease, color 0.4s ease',
							}}
						>
							→
						</Box>
					</Box>
				</Reveal>
			))}
		</Container>
	);
}
