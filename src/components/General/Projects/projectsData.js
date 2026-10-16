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
