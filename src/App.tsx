import React from 'react';
import './App.css';
import { Box, Container, Stack } from '@mui/material';
import Headings from './components/Headings';
import Step1 from './components/Step-1';
import Step2 from './components/Step-2';
import Step3 from './components/Step-3';
import Step4 from './components/Step-4';
import Step5 from './components/Step-5';

function App() {
	return (
		<Box sx={{ bgcolor: "green.light", minHeight: "100vh" }}>
			<Container sx={{ height: "100vh" }}>
				<Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: "100%"}}>
					<Headings />
					<Step1 />
					<Step2 />
					<Step3 />
					<Step4 />
					<Step5 />
				</Stack>
			</Container>
		</Box>
	);
}

export default App;
