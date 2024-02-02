import { Typography } from "@mui/material";
import { ReactElement } from "react";

interface SectionTitleProps {
	title: string;
	description: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps): ReactElement {
	return (
		<>
			<Typography variant="h3">{ title }</Typography>
			<Typography variant="body1" sx={{ color: 'secondary.darker' }}>{ description }</Typography>
		</>
	)
}