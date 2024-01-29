import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";

export default function Step3() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SectionTitle title="Challenge Preference" description="Please tell us which frontend challenges you would like to participate in." />
			</Grid>
		</Grid>
	);
}