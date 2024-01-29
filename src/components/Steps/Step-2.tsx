import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function Step2() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SectionTitle title="Skill Level" description="Please tell us about your skill level in frontend development." />
			</Grid>
		</Grid>
	);
}