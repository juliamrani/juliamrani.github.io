// Contenu de la section « My Journey » : une étape par période, dans l'ordre chronologique.
//
// Champs d'une étape :
// - period : la période affichée en petit (« 2025 — 2026 »…)
// - title, text : titre et texte de l'étape
// - lines (optionnel) : liste de { label, text } pour un début en gras
// - contactLink (optionnel) : true pour ajouter un lien vers la section Contact

export const intro =
	'From my first lines of code to Data & AI, here is how my journey has unfolded so far.';

export const steps = [
	{
		period: '2025 — 2026',
		title: '1st year · Building the foundations',
		text: 'Starting from zero, I learned the basics of application design and code through web projects, and took part in two intense hackathons:',
		lines: [
			{
				label: 'Product Design Hackathon - Les Shifters:',
				text: '3 days to collect and structure sustainable development data from French municipalities.',
			},
			{
				label: 'Innovatech Challenge - Elles Bougent:',
				text: '5 hours to imagine the industry of the future, in an all-female intergenerational competition.',
			},
		],
	},
	{
		period: 'June 2026',
		title: 'Web developer internship · VirtuoTech',
		text: 'I designed and built the company’s showcase website with Angular and TypeScript, with a focus on responsive design.',
	},
	{
		period: '2026 — 2027',
		title: '2nd year · Specializing in Data & AI',
		text: 'I now explore machine learning, data analysis and LLM security, through projects like patient clustering and prompt injection defense. I am also mentored by a woman working in tech through the Elles Bougent association.',
	},
	{
		period: 'Next',
		title: 'Looking for an internship and a work-study position',
		text: 'I am looking for a 4-month internship starting in April 2027, then a work-study position (alternance) from September 2027 to complete the final year of my bachelor’s degree.',
		contactLink: true,
	},
];
