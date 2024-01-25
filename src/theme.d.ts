import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
	interface Palette {
		green?: string | PaletteColor;
		orange?: string | PaletteColor;
		white?: string | PaletteColor;
	}

	interface PaletteOptions {
		green?: PaletteColorOptions;
		orange?: PaletteColorOptions;
		white?: PaletteColorOptions;
	}

	interface PaletteColor {
		darker?: string;
	}

	interface SimplePaletteColorOptions {
    darker?: string;
  }
}