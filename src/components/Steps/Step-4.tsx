import { Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { InputProps } from "../Form/Form";

export default function Step4({ values, touched, errors }: InputProps) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SectionTitle title="Review and Confirm" description="Please review your information to make sure everything is accurate." />
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Full Name</Typography>
					<Typography variant="subtitle2">{values.name}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Email Address</Typography>
					<Typography variant="subtitle2">{values.email}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Phone Number</Typography>
					<Typography variant="subtitle2">{values.phone}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Portfolio/GitHub Link</Typography>
					<Typography variant="subtitle2">{values.link}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Skill Level</Typography>
					<Typography variant="subtitle2">{values.skill}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={4}>
				<Stack direction='column' sx={{ backgroundColor: 'secondary.main', borderRadius: '10px', paddingY: '16px', paddingX: '14px' }}>
					<Typography variant="body2" sx={{ color: 'secondary.dark'}}>Challenge Preference</Typography>
					<Typography variant="subtitle2">{values.challenge_preference.join(", ")}</Typography>
				</Stack>
			</Grid>
		</Grid>
	)
}