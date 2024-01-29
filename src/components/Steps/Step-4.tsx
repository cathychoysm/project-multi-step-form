import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function Step4() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SectionTitle title="Review and Confirm" description="Please review your information to make sure everything is accurate." />
			</Grid>
		</Grid>
	)
}