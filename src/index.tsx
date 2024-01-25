import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, colors, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const theme = createTheme({
	palette: {
		primary: {
			main: '#111827'
		},
		secondary: {
			main: '#E5E7EB',
			light: '#D1D5DB',
			dark: '#9CA3AF',
			darker: '#6B7280'
		},
		green: {
			main: colors.lightGreen[400],
			light: '#F3F3E3'
		},
		orange: {
			main: '#FC6C4C',
		},
		white: {
			main: '#FFFFFF'
		}
	},
	typography: {
		fontFamily: 'Poppins',
		h1: {
			fontFamily: 'Merriweather',
			fontSize: "32px",
		},
		h2: {
			fontFamily: 'Poppins',
			fontSize: "24px",
			fontWeight: 500
		},
		h3: {
			fontFamily: 'Poppins',
			fontSize: "18px",
			fontWeight: 400
		},
		subtitle1: {
			fontFamily: 'Poppins',
			fontSize: "14px",
			fontWeight: 500
		},
		body1: {
			ontFamily: 'Poppins',
			fontSize: "14px",
			fontWeight: 400
		}
	}
})

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
