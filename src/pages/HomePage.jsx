import { Box } from '@mui/material';
import NavBar from '../components/General/NavBar.jsx';
import Hero from '../components/General/Hero/Hero.jsx';
import Menu from '../components/General/Menu.jsx';
import About from '../components/General/About/About.jsx';
import Projects from '../components/General/Projects/Projects.jsx';
import Journey from '../components/General/Journey/Journey.jsx';
import Contact from '../components/General/Contact/Contact.jsx';
import Footer from '../components/General/Footer.jsx';

export default function Home() {
	return (
		<Box>
			<NavBar />
			<Hero />

			<Box
				sx={{
					width: '100%',
					background: 'linear-gradient(to bottom, #f8f4e3 0%, #dde9e0 22%, #8cb8b5 55%, #4f7fa8 85%, #356190 100%)',
				}}
			>
				<Menu />
				<About />
				<Projects />
				<Journey />
				<Contact />
				<Footer />
			</Box>
		</Box>
	);
}
