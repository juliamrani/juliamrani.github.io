import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import PhotoHome7 from '../../assets/PhotoHome7.jpg';

const blue = '#133d49';

const GlassCard = ({ children }) => (
	<Paper
		elevation={0}
		sx={{
			p: 4,
			background: 'rgba(255,255,255,0.6)',
			backdropFilter: 'blur(12px)',
			border: '2px solid rgba(255, 255, 255, 0.78)',
			borderRadius: '10px',
			transition: 'all 0.4s ease',
			'&:hover': {
				transform: 'translateY(-5px)',
				boxShadow: '0 20px 60px rgba(34, 35, 42, 0.1)',
				background: 'rgba(251, 220, 244, 0.47)',
				borderColor: 'rgb(179, 148, 170)',
			},
		}}
	>
		{children}
	</Paper>
);

const SmallT = ({ children }) => (
	<Typography
		fontWeight={600}
		fontFamily={'Montserrat'}
		sx={{
			mt: 3,
			fontSize: {
				xs: '0.9rem',
				sm: '1rem',
				md: '1.1rem',
			},
		}}
	>
		{children}
	</Typography>
);

const Date = ({ children }) => (
	<Typography
		color="text.secondary"
		fontFamily={'Montserrat'}
		sx={{
			fontSize: {
				xs: '0.85rem',
				sm: '1rem',
				md: '1.1rem',
			},
		}}
	>
		{children}
	</Typography>
);

export default function ThisYear() {
	return (
		<Box id="vision">
			<Typography
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'Montserrat',
					fontWeight: 800,
					mt: 20,
					px: 14,
					color: '#11313a',
					fontSize: {
						xs: '3.5rem',
						sm: '5rem',
						md: '7rem',
					},
				}}
			>
				This year
			</Typography>

			<Box
				sx={{
					py: 4,
					mb: 8,
				}}
			>
				<Container>
					<Typography
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: blue,
							lineHeight: 1.9,
							fontSize: '1.05rem',
							maxWidth: '600px',
							textAlign: 'center',
							fontFamily: 'Space Mono',
							mx: 'auto',
						}}
					>
						Throughout the year, I have learned a lot of things and
						I have grown even more...
					</Typography>

					<Box
						sx={{
							position: 'relative',
							minheight: { xs: 'auto', md: '75vh' },
							width: { xs: '95vw', md: '105vh' },
							maxWidth: '90%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.11),rgba(0, 0, 0, 0.11)),url(${PhotoHome7})`,
							backgroundSize: 'cover',
							boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
							backgroundPosition: 'center',
							borderRadius: '10px',
							mt: 8,
							mx: 'auto',
							py: 4,
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: '90%',
							}}
						>
							<Box
								sx={{
									p: 4,
									background: 'rgba(255, 255, 255, 0.38)',
									backdropFilter: 'blur(12px)',
									border: '2px solid rgba(255, 255, 255, 0.41)',
									borderRadius: '10px',
								}}
							>
								<SmallT>
									Real-World Challenges
								</SmallT>
								<Date>
									I participated in two intense hackathons, collaborating with diverse teams to build concrete solutions:
									<br/> •{' '}
									<strong>
										Product Design Hackathon - Les Shifters:
									</strong>{' '}
									A 3-day challenge dedicated to collecting and structuring sustainable development data from French municipalities.
									<br />•{' '}
									<strong>
										Innovatech Challenge - Elles Bougent:
									</strong>{' '}
									An all-female intergenerational competition. Five hours to develop a vision for the industry of the future based on an innovative and inspiring theme.
								</Date>
							</Box>

							<Box
								sx={{
									p: 4,
									background: 'rgba(255, 255, 255, 0.38)',
									backdropFilter: 'blur(12px)',
									border: '2px solid rgba(255, 255, 255, 0.41)',
									borderRadius: '10px',
								}}
							>
								<SmallT>
									Stepping Out of My Comfort Zone
								</SmallT>
								<Date>
									This first year has been a challenging but rewarding voyage. 
									I've learned to navigate from zero to mastering the basics of application design and code. Today, 
									I don't just speak human languages, I use programming languages to bring ideas to life, proving my 
									ability to adapt and learn fast in any environment.
								</Date>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
