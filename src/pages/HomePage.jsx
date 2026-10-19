import { Box, Toolbar } from '@mui/material';
import Name from '../components/General/Name/Name.jsx';
import About from '../components/General/About/About.jsx';
import Menu from '../components/General/Menu.jsx';
import Projects from '../components/General/Projects/Projects.jsx';
import Journey from '../components/General/Journey/Journey.jsx';
import Contact from '../components/General/Contact/Contact.jsx';

export default function Home() {
	return (
		<Box>
			<Name />

			<Box
				sx={{
					minHeight: '100vh',
					width: '100%',
					background: 'linear-gradient(to bottom, #f8f4e3, #8cb8b5, #356190)',
				}}
			>
				<Menu />
				<About />
				<Projects />
				<Journey />
				<Contact />
			</Box>
		</Box>
	);
}
