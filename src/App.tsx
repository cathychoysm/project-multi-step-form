import React, { ReactElement } from 'react';
import './App.css';
import { Box, Container, Stack } from '@mui/material';
import Headings from './components/Headings';
import Form from './components/Form/Form';

function App(): ReactElement {
	return (
		<Box sx={{ bgcolor: "green.light", minHeight: "100vh" }}>
			<Container sx={{ height: "100vh" }}>
				<Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
					<Headings />
					<Form />
				</Stack>
			</Container>
		</Box>
	);
}

export default App;
