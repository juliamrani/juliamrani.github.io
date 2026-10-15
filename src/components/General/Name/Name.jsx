import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PhotoMer from '../../../assets/PhotoMer.webp';
import PhotoMerMobile from '../../../assets/PhotoMer-mobile.webp';

export default function Name() {
	return (
		<Box
			sx={{
				backgroundImage: {
					xs: `url(${PhotoMerMobile})`,
					md: `url(${PhotoMer})`,
				},
				position: 'relative',
				minHeight: '60vh',
				display: 'flex',
				alignItems: { xs: 'flex-start', md: 'center' },
				px: { xs: 2, md: 6 },
				pt: { xs: 10, md: 0 },
				justifyContent: 'center',
				backgroundSize: 'cover',
				backgroundPosition: {
					xs: 'center bottom',
					md: 'center 70%',
				},
				backgroundAttachment: 'scroll',
			}}
		>
			
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(rgba(10, 42, 51, 0.15), rgba(10, 42, 51, 0.45))',
				}}
			/>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						py: 19,
						px: 8,
						gap: 6,
						flexDirection: { xs: 'column', sm: 'row', md: 'row' },
						textAlign: { xs: 'center', sm: 'left', md: 'left' },
					}}
				>
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						<Typography
							variant="h1"
							sx={{
								fontFamily: "'Bungee', cursive",
								fontWeight: 700,
								color: '#ffffff',
								textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
								fontSize: {
									xs: '3rem',
									sm: '3.7rem',
									md: '4.5rem',
								},
							}}
						>
							My Portfolio
						</Typography>

						<Typography
							sx={{
								color: '#ffffff',
								textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
								mt: 2,
								fontSize: { xs: 18, sm: 23, md: 27 },
								maxWidth: 600,
								fontFamily: 'Space Mono',
							}}
						>
							Application Developer Student specializing in Data
							& AI, with a background in building modern and
							intuitive web experiences.
						</Typography>
					</motion.div>
				</Box>
			</Container>
		</Box>
	);
}
