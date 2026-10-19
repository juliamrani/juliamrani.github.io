import cvrieImg from '../../../assets/projects/cvrie.webp';
import etodoImg from '../../../assets/projects/etodo.webp';
import etodoTasksImg from '../../../assets/projects/etodo-tasks.webp';
import jobAggregatorImg from '../../../assets/projects/jobaggregator.webp';

// Contenu des projets par année

// Champs d'un projet :
// - title, badges de techno, description, contribution, learned 
// - image, imageAlt (optionnel) : aperçu affiché au survol de l'œil
// - scrollImage (optionnel) : true si l'image est une page entière qui doit défiler
// - secondImage, secondImageAlt (optionnel) : deuxième capture qui alterne avec la première

export const years = [
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
				secondImage: etodoTasksImg,
				secondImageAlt: 'TaskMaster task list page',
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
					'A command-line NLP engine that analyzes Project Gutenberg books to generate "book cards" for publishers.',
				contribution: [
					{
						label: 'Lexical diversity:',
						text: 'measured vocabulary richness (unique words, hapax, TTR, word length).',
					},
					{
						label: 'Summarization:',
						text: 'built the summary pipeline, comparing extractive and abstractive methods.',
					},
					{
						label: 'Documentation:',
						text: 'wrote the project documentation and pipeline diagrams.',
					},
				],
				learned: 'Turning raw text into structured data with Python, and clearly justifying technical choices.',
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
					'A job platform that collects and standardizes offers, built in partnership with WeLoveDevs.',
				contribution: [
					{
						label: 'UI/UX:',
						text: 'designed the interface on Figma (search, offer details, admin dashboard) following WCAG 2.1.',
					},
					{
						label: 'Frontend:',
						text: 'built the responsive Angular frontend connected to the REST API.',
					},
					{
						label: 'Business:',
						text: 'wrote the market analysis and the value proposition.',
					},
				],
				learned: 'Bridging product thinking and code, and working across the full product lifecycle in a team.',
				tech: ['Angular', 'TypeScript', 'Angular Material', 'Figma', 'WCAG 2.1', 'FastAPI', 'MongoDB', 'spaCy', 'NLTK', 'Docker'],
				image: jobAggregatorImg,
				imageAlt: 'JobAggregator landing page',
				scrollImage: true,
			},
		],
	},
	{
		label: '2nd year · Data & AI',
		intro: 'This year I specialized in Data & AI. Here are my projects since the start of my second year.',
		projects: [
			{
				title: 'Dr CVRIE - Machine Learning',
				description: 'A medical AI assistant combining image classification and patient clustering.',
				contribution: [
					'In a pair, owned the unsupervised part: grouping 15,000 unlabeled patients into diabetes risk levels.',
					'Built the preprocessing pipeline and compared K-Means with Agglomerative Clustering.',
					'Validated the results with an unseen variable and visualized the clusters with PCA.',
				],
				learned: 'Evaluating a model without labels, and choosing what is useful over the best score.',
				tech: ['Python', 'Scikit-learn', 'K-Means', 'Agglomerative Clustering', 'PCA', 'Pandas', 'NumPy', 'Matplotlib', 'JupyterLab'],
				image: cvrieImg,
				imageAlt: 'PCA projection of 15,000 patients grouped into Low, Medium and High diabetes risk',
			},
			{
				title: 'Codename - LLM Security & Prompt Engineering',
				description:
					'Hardening a local LLM agent against prompt injection, and attacking other agents to extract their secrets.',
				contribution: [
					'Solo project: secured an Ollama agent with a system prompt that only reveals its codeword on the exact password.',
					'Tuned the Modelfile (temperature, sampling, length, stop sequences) as an extra security layer.',
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
