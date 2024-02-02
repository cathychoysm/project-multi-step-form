import { FormControlLabel, Grid, Icon, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { InputProps } from "../Form/Form";
import { Field } from "formik";
import BeginnerIcon from "../../images/beginner_icon.svg";
import IntermediateIcon from "../../images/intermediate_icon.svg";
import AdvancedIcon from "../../images/advanced_icon.svg";
import ExpertIcon from "../../images/expert_icon.svg";

export default function Step2({ values, touched, errors }: InputProps) {
	interface LabelProps {
		icon: string;
		children: string;
	}

	const Label = ({ icon, children }: LabelProps) => (
		<Stack direction="row" spacing='10px' sx={{ alignItems: 'center' }}>
			<Icon color="orange">
				<img src={icon} alt={children}/>
			</Icon>
			<Typography variant="subtitle1">{children}</Typography>
		</Stack>
	)

	return (
		<Field name="skill" as={RadioGroup}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<SectionTitle title="Skill Level" description="Please tell us about your skill level in frontend development." />
				</Grid>
				<Grid item xs={6}>
					<FormControlLabel
						value="Beginner"
						control={<Radio />}
						label={<Label icon={BeginnerIcon} children="Beginner" />} />
				</Grid>
				<Grid item xs={6}>
					<FormControlLabel
						value="Intermediate"
						control={<Radio />}
						label={<Label icon={IntermediateIcon} children="Intermediate" />} />
				</Grid>
				<Grid item xs={6}>
					<FormControlLabel
						value="Advanced"
						control={<Radio />}
						label={<Label icon={AdvancedIcon} children="Advanced" />} />
				</Grid>
				<Grid item xs={6}>
					<FormControlLabel
						value="Expert"
						control={<Radio />}
						label={<Label icon={ExpertIcon} children="Expert" />} />
				</Grid>
			</Grid>
		</Field>
	);
}