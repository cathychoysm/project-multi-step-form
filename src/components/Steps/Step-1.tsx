import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function Step1() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SectionTitle title="Personal Information" description="Please provide your personal details so we can get to know you better." />
			</Grid>
		</Grid>
	);
}