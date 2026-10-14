import { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Tabs, Tab } from '@mui/material';
import cvrieImg from '../../../assets/projects/cvrie.webp';
import etodoImg from '../../../assets/projects/etodo.webp';
import jobAggregatorImg from '../../../assets/projects/jobaggregator.webp';

const blue = '#133d49';

const years = [
	{
		label: '1st year · Web',
		intro:
			'Here are some examples of projects I had the chance to work on during my first year at EPITECH.',
		projects: [
			{
				title: 'E-Todo - Web Application for Task Management',
				description:
					'Complete development of a To-Do web application (MySQL database, Node.js/Express REST API, and user interface) allowing fluid management of tasks and users.',
				contribution: [
					'Designed and developed the entire user interface using HTML, CSS, and React.js.',
					'Optimized user experience (UX/UI) by creating a responsive design (mobile and desktop) with consistent visual branding and clear interaction feedback.',
				],
				learned:
					'I learned to manage dynamic state in React.js and how to properly secure front-end components.',
				tech: ['React.js', 'Material UI', 'React Router', 'HTML', 'CSS', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'Nginx'],
				image: etodoImg,
				imageAlt: 'TaskMaster home page with the login form',
			},
			{
				title: 'Hack & Juice - Cybersecurity',
				description:
					'Practical computer security project focused on discovering, exploiting, and documenting application vulnerabilities through the OWASP Juice Shop platform.',
				contribution: [
					'Conducted the entire project in total autonomy (solo).',
					'Performed targeted code analysis and penetration testing covering various categories of the OWASP Top 10 (such as injections, XSS flaws, or broken authentication).',
					'Solved and thoroughly documented advanced security challenges, including attack methodology and code patch research.',
				],
				learned:
					'I improved personal autonomy and technical writing skills by producing comprehensive security write-ups and got introduced to cybersecurity.',
				tech: ['OWASP Juice Shop', 'OWASP Top 10', 'Pentesting'],
			},
			{
				title: 'Alice in Wonderland – NLP Engine (Natural Language Processing)',
				description:
					'Development of a Command Line Interface (CLI) NLP engine that analyzes books from Project Gutenberg to generate synthetic "book cards" for publishers and editors.',
				contribution: [
					{
						label: 'Lexical Diversity Measurements:',
						text: 'Implemented the module assessing the richness of an author’s vocabulary by calculating key metrics (tokens, unique types, hapax legomena, TTR ratio, average word length).',
					},
					{
						label: 'Book Summarization:',
						text: 'Developed the text condensation pipeline, exploring and justifying the trade-offs between extractive and lightweight abstractive methods.',
					},
					{
						label: 'Technical Documentation:',
						text: 'Authored the complete project documentation and designed diagrams illustrating the main stages of the NLP pipelines.',
					},
				],
				learned:
					'I learned how to process raw text into structured data using Python/NLP tools and I acquired documentation habits, how to clearly justify a choice.',
				tech: ['Python', 'NLP', 'CLI'],
			},
			{
				title: 'ELIZA – Intelligent Chatbot & Marketing Strategy',
				description:
					'Design of an intelligent conversational agent (chatbot) responding to a real business need to optimize company processes.',
				contribution: [
					{
						label: 'UI/UX & Prototyping:',
						text: 'Created a visual identity and designed the full user interface on Figma, ensuring a clean, modern, and engaging user experience.',
					},
					{
						label: 'Business Report:',
						text: 'Drafted the marketing report defining targets, user needs, the product value chain, the impact of AI on cost optimization, and Return on Investment (ROI) via clear Key Performance Indicators (KPIs).',
					},
				],
				learned:
					'I learned to think like a product designer and marketer and I improved in prototyping workflows and user-centered design principles to build a highly professional interface.',
				tech: ['Figma', 'UI/UX', 'Marketing'],
			},
			{
				title: 'Job Aggregator – Job Platform',
				description:
					'Design and development of a complete job aggregator platform collecting external offers, standardizing data, and helping users make better career decisions — built in partnership with WeLoveDevs, a real-world tech hiring platform.',
				contribution: [
					{
						label: 'UI/UX & Prototyping:',
						text: 'Designed the full visual identity and user interface on Figma, covering key flows including registration, offer search, offer details, and the admin dashboard, with a focus on WCAG 2.1 accessibility compliance.',
					},
					{
						label: 'Frontend Development:',
						text: 'Built the responsive frontend in Angular, implementing the user dashboard, offer search and filtering, offer detail pages, and the admin moderation interface, connected to the REST backend API.',
					},
					{
						label: 'Business Documentation:',
						text: 'Led the product and market discovery phase, writing the market analysis, defining the value proposition and identifying user pain points.',
					},
				],
				learned:
					'I learned to bridge product thinking with technical execution, from translating user needs into wireframes and accessible interfaces, to documenting choices in a professional format. This project strengthened my ability to work across the full product lifecycle within a multidisciplinary team.',
				tech: ['Angular', 'TypeScript', 'Angular Material', 'Figma', 'WCAG 2.1', 'FastAPI', 'MongoDB', 'spaCy', 'NLTK', 'Docker'],
				image: jobAggregatorImg,
				imageAlt: 'JobAggregator landing page',
			},
		],
	},
	{
		label: '2nd year · Data & AI',
		intro: 'This year I specialized in Data & AI. Here are my projects since the start of my second year.',
		projects: [
			{
				title: 'Dr CVRIE - Machine Learning',
				description:
					'A medical AI assistant combining image classification and unsupervised clustering of patient data.',
				contribution: [
					'Worked in a pair and owned the unsupervised part: grouping 15,000 unlabeled patients into diabetes risk levels (Low, Medium, High).',
					'Built the preprocessing pipeline: missing values, encoding and normalization (StandardScaler).',
					'Compared K-Means and Agglomerative Clustering (silhouette score) and mapped clusters to risk levels using blood sugar and HbA1c.',
					'Validated the results with an unseen variable (family history) and visualized the clusters with PCA.',
				],
				learned: 'Evaluating a model without labels, and choosing what is useful over the best score.',
				tech: ['Python', 'Scikit-learn', 'K-Means', 'Agglomerative Clustering', 'PCA', 'Pandas', 'NumPy', 'Matplotlib', 'JupyterLab'],
				image: cvrieImg,
				imageAlt: 'PCA projection of 15,000 patients grouped into Low, Medium and High diabetes risk',
			},
			{
				title: 'Codename - LLM Security & Prompt Engineering',
				description:
					'Hardening a local LLM agent against prompt injection, and building attacks to extract secrets from other agents.',
				contribution: [
					'Carried out the project solo.',
					'Secured an Ollama agent (granite3.1-moe:3b) with a system prompt that only reveals the codeword on the exact password and blocks indirect extraction, roleplay and instruction overrides.',
					'Tuned the Modelfile (temperature, top_k/top_p, seed, max length, stop sequences) as an extra security layer.',
					'Built five attack prompts, each using a different technique, tested against unknown agents.',
				],
				learned: 'LLM security from both sides, and balancing security with usability.',
				tech: ['Ollama', 'Modelfile', 'granite3.1-moe:3b', 'Prompt engineering', 'Prompt injection'],
			},
			{
				title: '2D Game - Object-Oriented Programming in Java',
				description: 'A 2D game in Java, from the Game Design Document to a playable demo.',
				contribution: [
					'In a team of three, owned the item system (common, uncommon, rare) with stackable effects and diminishing returns.',
					'Connected items to enemies so effects (damage, debuffs, drops) apply in combat.',
					'Designed the playable character Lunaria and wrote the documentation (Javadoc, UML, JaCoCo coverage).',
				],
				learned: 'How a game is structured, and writing modular code that fits with teammates’ work.',
				tech: ['Java', 'OOP', 'Design patterns', 'UML', 'JaCoCo', 'Javadoc', 'Markdown'],
			},
		],
	},
];

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

const Title = ({ children }) => (
	<Typography
		sx={{
			fontFamily: 'Montserrat',
			fontWeight: 700,
			color: blue,
			fontSize: {
				xs: '1.5rem',
				sm: '2rem',
				md: '2.2rem',
			},
		}}
	>
		{children}
	</Typography>
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
			mt: 2,
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

const Descr = ({ children }) => (
	<Typography
		component="div"
		mt={2}
		lineHeight={1.8}
		fontFamily={'Space Mono'}
		sx={{
			fontSize: {
				xs: '0.75rem',
				sm: '0.8rem',
				md: '0.88rem',
			},
		}}
	>
		{children}
	</Typography>
);

const ProjectCard = ({ project }) => (
	<Box mt={16}>
		<Title>{project.title}</Title>

		<Grid container spacing={2} mt={4}>
			<Grid item xs={12} md={6}>
				<GlassCard>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						{project.tech.map((tech) => (
							<Chip
								key={tech}
								label={tech}
								size="small"
								sx={{
									fontFamily: 'Space Mono',
									fontSize: '0.72rem',
									color: blue,
									background: 'rgba(140, 184, 181, 0.35)',
									border: '1px solid rgba(19, 61, 73, 0.2)',
								}}
							/>
						))}
					</Box>

					<Date>
						<strong>Project description: </strong>
						{project.description}
					</Date>

					<SmallT>My contribution</SmallT>
					<Descr>
						{project.contribution.map((item, i) => (
							<Box key={i} sx={{ display: 'flex', gap: 1 }}>
								<span>•</span>
								<span>
									{typeof item === 'string' ? (
										item
									) : (
										<>
											<strong>{item.label}</strong> {item.text}
										</>
									)}
								</span>
							</Box>
						))}
					</Descr>

					<SmallT>What I learned...</SmallT>
					<Descr>{project.learned}</Descr>
				</GlassCard>
			</Grid>

			{project.image && (
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<Box
						component="img"
						src={project.image}
						alt={project.imageAlt}
						loading="lazy"
						sx={{
							width: '100%',
							maxWidth: 720,
							display: 'block',
							borderRadius: '10px',
							border: '2px solid rgba(255, 255, 255, 0.78)',
							boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
						}}
					/>
				</Box>
			)}
		</Grid>
	</Box>
);

export default function Projects() {
	const [year, setYear] = useState(1);
	const current = years[year];

	return (
		<Box id="projects">
			<Typography
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'Montserrat',
					fontWeight: 800,
					mt: 20,
					px: { xs: 2, md: 14 },
					color: '#11313a',
					fontSize: {
						xs: '3.5rem',
						sm: '5rem',
						md: '7rem',
					},
				}}
			>
				Projects
			</Typography>

			<Box sx={{ py: 4 }}>
				<Container>
					<Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
						<Tabs
							value={year}
							onChange={(_, value) => setYear(value)}
							variant="scrollable"
							scrollButtons={false}
							sx={{
								p: 0.5,
								minHeight: 0,
								background: 'rgba(255,255,255,0.5)',
								backdropFilter: 'blur(12px)',
								border: '2px solid rgba(255, 255, 255, 0.78)',
								borderRadius: '999px',
								'& .MuiTabs-indicator': { display: 'none' },
								'& .MuiTab-root': {
									minHeight: 0,
									py: 1,
									px: { xs: 2, sm: 3 },
									borderRadius: '999px',
									textTransform: 'none',
									fontFamily: 'Montserrat',
									fontWeight: 600,
									fontSize: { xs: '0.85rem', sm: '1rem' },
									color: blue,
									transition: 'all 0.3s ease',
								},
								'& .MuiTab-root.Mui-selected': {
									color: '#ffffff',
									background: blue,
								},
							}}
						>
							{years.map((y) => (
								<Tab key={y.label} label={y.label} disableRipple />
							))}
						</Tabs>
					</Box>

					<Typography
						sx={{
							color: blue,
							lineHeight: 1.9,
							fontSize: '1.05rem',
							maxWidth: '600px',
							textAlign: 'center',
							fontFamily: 'Space Mono',
							mx: 'auto',
						}}
					>
						{current.intro}
					</Typography>

					{current.projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</Container>
			</Box>
		</Box>
	);
}
