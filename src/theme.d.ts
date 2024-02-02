import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
	interface Palette {
		green?: string | PaletteColor;
		orange?: string | PaletteColor;
	}

	interface PaletteOptions {
		green?: PaletteColorOptions;
		orange?: PaletteColorOptions;
	}

	interface PaletteColor {
		darker?: string;
	}

	interface SimplePaletteColorOptions {
		darker?: string;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		orange: true;
	}
}

declare module '@mui/material/InputBase' {
	interface InputBasePropsColorOverrides {
		orange: true;
	}
}

declare module '@mui/material/Icon' {
	interface IconPropsColorOverrides {
		orange: true;
	}
}

declare module '@mui/material/Checkbox' {
	interface CheckboxPropsColorOverrides {
		orange
	}
}