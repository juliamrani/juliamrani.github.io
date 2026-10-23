import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DownloadIcon from '@mui/icons-material/Download';
import PhotoMer from '../../../assets/PhotoMer.webp';
import PhotoMerMobile from '../../../assets/PhotoMer-mobile.webp';
import { years } from '../Projects/projectsData';
import { downloadCv } from '../common/downloadCv';
import { cream, darkBlue } from '../common/theme';

const MotionDiv = motion.div;

const projectCount = years.reduce((total, year) => total + year.projects.length, 0);

const stats = [
	{ value: projectCount, label: 'projects' },
	{ value: 1, label: 'internship' },
	{ value: 2, label: 'hackathons' },
];

const appear = (delay) => ({
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay },
});

const shadow = '0 2px 12px rgba(0, 0, 0, 0.45)';

export default function Hero() {
	return (
		<Box
			id="top"
			sx={{
				position: 'relative',
				minHeight: { xs: 'auto', md: '88vh' },
				display: 'flex',
				alignItems: 'center',
				py: { xs: 14, md: 10 },
				backgroundImage: {
					xs: `url(${PhotoMerMobile})`,
					md: `url(${PhotoMer})`,
				},
				backgroundSize: 'cover',
				backgroundPosition: {
					// Sur mobile, on cale la photo à gauche, du côté de la mer
					xs: 'left center',
					md: 'center 70%',
				},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					background: {
						xs: 'linear-gradient(rgba(10, 42, 51, 0.35), rgba(10, 42, 51, 0.55))',
						md: 'linear-gradient(90deg, rgba(10, 42, 51, 0.6) 0%, rgba(10, 42, 51, 0.25) 55%, rgba(10, 42, 51, 0.05) 100%)',
					},
				}}
			/>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<MotionDiv {...appear(0.1)}>
					<Typography
						sx={{
							fontFamily: 'Space Mono',
							color: cream,
							opacity: 0.85,
							fontSize: { xs: '0.85rem', md: '1rem' },
							textShadow: shadow,
						}}
					>
						&gt; cd ~/portfolio
					</Typography>
				</MotionDiv>

				<MotionDiv {...appear(0.25)}>
					<Typography
						variant="h1"
						sx={{
							mt: 1.5,
							fontFamily: "'Bungee', cursive",
							color: '#ffffff',
							lineHeight: 1,
							textShadow: shadow,
							fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
						}}
					>
						My Portfolio
					</Typography>
				</MotionDiv>

				<MotionDiv {...appear(0.4)}>
					<Typography
						sx={{
							mt: 3,
							fontFamily: 'Montserrat',
							fontWeight: 600,
							color: '#ffffff',
							textShadow: shadow,
							fontSize: { xs: '1.05rem', md: '1.35rem' },
						}}
					>
						Web developer · Data &amp; AI student at EPITECH
					</Typography>
					<Typography
						sx={{
							mt: 1.5,
							maxWidth: 560,
							lineHeight: 1.8,
							fontFamily: 'Space Mono',
							color: cream,
							textShadow: shadow,
							fontSize: { xs: '0.9rem', md: '1.05rem' },
						}}
					>
						I started with interfaces, I now work with data and models.
						Here is what I build, and what I learn along the way.
					</Typography>
				</MotionDiv>

				<MotionDiv {...appear(0.55)}>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 5 }}>
						<Button
							href="#projects"
							endIcon={<ArrowDownwardIcon />}
							sx={{
								px: 3.5,
								py: 1.3,
								borderRadius: '999px',
								textTransform: 'none',
								fontFamily: 'Space Mono',
								fontWeight: 700,
								color: darkBlue,
								background: cream,
								transition: 'transform 0.3s ease, background 0.3s ease',
								'&:hover': { background: '#ffffff', transform: 'translateY(-2px)' },
							}}
						>
							See my projects
						</Button>
						<Button
							onClick={downloadCv}
							endIcon={<DownloadIcon />}
							sx={{
								px: 3.5,
								py: 1.3,
								borderRadius: '999px',
								textTransform: 'none',
								fontFamily: 'Space Mono',
								fontWeight: 700,
								color: '#ffffff',
								border: '1px solid rgba(255, 255, 255, 0.6)',
								background: 'rgba(255, 255, 255, 0.08)',
								backdropFilter: 'blur(8px)',
								transition: 'transform 0.3s ease, background 0.3s ease',
								'&:hover': { background: 'rgba(255, 255, 255, 0.2)', transform: 'translateY(-2px)' },
							}}
						>
							Download my CV
						</Button>
					</Box>
				</MotionDiv>

				<MotionDiv {...appear(0.7)}>
					<Box
						sx={{
							display: 'inline-flex',
							mt: { xs: 6, md: 8 },
							borderRadius: '16px',
							border: '1px solid rgba(255, 255, 255, 0.35)',
							background: 'rgba(255, 255, 255, 0.1)',
							backdropFilter: 'blur(10px)',
						}}
					>
						{stats.map((stat, i) => (
							<Box
								key={stat.label}
								sx={{
									px: { xs: 2.5, md: 4 },
									py: 2,
									borderLeft: i > 0 ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
								}}
							>
								<Typography
									sx={{
										fontFamily: "'Bungee', cursive",
										color: '#ffffff',
										lineHeight: 1,
										fontSize: { xs: '1.6rem', md: '2.2rem' },
									}}
								>
									{stat.value}
								</Typography>
								<Typography
									sx={{
										mt: 0.5,
										fontFamily: 'Space Mono',
										color: cream,
										fontSize: { xs: '0.72rem', md: '0.85rem' },
									}}
								>
									{stat.label}
								</Typography>
							</Box>
						))}
					</Box>
				</MotionDiv>
			</Container>
		</Box>
	);
}
