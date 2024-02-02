import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { InputProps } from "../Form/Form";
import { Field } from "formik";

export default function Step3({ values, touched, errors }: InputProps) {
	return (
		<Field name="challenge_preference" as={FormGroup}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<SectionTitle title="Challenge Preference" description="Please tell us which frontend challenges you would like to participate in." />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field as={FormControlLabel}
						control={<Checkbox color="orange" sx={{paddingLeft: '12px'}} />}
						type="checkbox"
						value="HTML/CSS/JS"
						label="HTML/CSS/JS"
						name="challenge_preference"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field as={FormControlLabel}
						control={<Checkbox color="orange" sx={{paddingLeft: '12px'}} />}
						type="checkbox"
						value="ReactJs"
						label="ReactJs"
						name="challenge_preference"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field as={FormControlLabel}
						control={<Checkbox color="orange" sx={{paddingLeft: '12px'}} />}
						type="checkbox"
						value="AngularJs"
						label="AngularJs"
						name="challenge_preference"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Field as={FormControlLabel}
						control={<Checkbox color="orange" sx={{paddingLeft: '12px'}} />}
						type="checkbox"
						value="Vue.js"
						label="Vue.js"
						name="challenge_preference"
					/>
				</Grid>
			</Grid>
		</Field>
	);
}