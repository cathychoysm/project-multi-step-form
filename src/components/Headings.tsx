import { Typography } from "@mui/material";
import { ReactElement } from "react";

export default function Headings(): ReactElement {
	return (
		<>
			<Typography variant="h1" sx={{ textAlign: 'center' }}>
				Join our Community of Developers
			</Typography>
			<Typography variant="h4" sx={{ textAlign: 'center', marginY: 3 }}>
				To join our community and participate in frontend challenges.
				<br />
				Please fill out the following form.
			</Typography>
		</>
	);
}