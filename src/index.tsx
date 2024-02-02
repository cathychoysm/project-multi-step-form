import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, colors, createTheme, outlinedInputClasses } from '@mui/material';

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
			dark: '#4B5563',
			darker: '#6B7280'
		},
		green: {
			main: colors.lightGreen[400],
			light: '#F3F3E3'
		},
		orange: {
			main: '#FC6C4C',
			contrastText: '#FFF'
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
			fontWeight: 600
		},
		h3: {
			fontFamily: 'Poppins',
			fontSize: "24px",
			fontWeight: 500
		},
		h4: {
			fontFamily: 'Poppins',
			fontSize: "18px",
			fontWeight: 400
		},
		subtitle1: {
			fontFamily: 'Poppins',
			fontSize: "14px",
			fontWeight: 500
		},
		subtitle2: {
			fontFamily: 'Poppins',
			fontSize: "12px",
			fontWeight: 500
		},
		body1: {
			ontFamily: 'Poppins',
			fontSize: "14px",
			fontWeight: 400
		},
		body2: {
			ontFamily: 'Poppins',
			fontSize: "12px",
			fontWeight: 400
		},
		button: {
			textTransform: 'none'
		}
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'--TextField-brandBorderColor': '#E5E7EB',
					'--TextField-brandBorderHoverColor': '#FC6C4C',
					'--TextField-brandBorderFocusedColor': '#FC6C4C',
				},
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: 'var(--TextField-brandBorderColor)',
					borderRadius: '10px',
					padding: '0 0'
				},

				root: {
					[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--TextField-brandBorderHoverColor)',
					},
					[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--TextField-brandBorderFocusedColor)',
						borderWidth: '1px'
					},
					height: '40px'
				},
			},
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					opacity: 0,
					width: 0,
				}
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					border: '1px solid #E5E7EB',
					borderRadius: '10px',
					width: '100%',
					height: '69px',
					[`&.MuiFormControlLabel-root:has(.Mui-checked)`] : {
						border: '1px solid #FC6C4C',
					}
				}
			}
		},
		MuiIcon: {
			styleOverrides: {
				root: {
					backgroundColor: '#FC6C4C',
					width: '34px',
					height: '34px',
					borderRadius: '100%'
				}
			}
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
