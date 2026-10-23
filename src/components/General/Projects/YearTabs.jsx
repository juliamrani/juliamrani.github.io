import { Box, Tabs, Tab } from '@mui/material';
import { blue } from '../common/theme';

// Onglets « 1st year · Web » / « 2nd year · Data & AI »
export default function YearTabs({ years, value, onChange }) {
	return (
		<Box sx={{ display: 'flex', mb: 5 }}>
			<Tabs
				value={value}
				onChange={(_, newValue) => onChange(newValue)}
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
	);
}
