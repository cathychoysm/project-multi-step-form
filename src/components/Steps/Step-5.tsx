import { Box, Stack, Typography } from "@mui/material";
import FinishedIcon from "../../images/finished_icon.svg"

export default function Step5() {
	return (
		<Stack spacing={5} sx={{ alignItems: 'center' }}>
			<Box width='125px' height='125px'>
				<img src={FinishedIcon} alt="Finished" />
			</Box>
			<Typography variant="h2" sx={{ textAlign: 'center' }}>Congratulations! 🎉</Typography>
			<Typography variant="body1" sx={{ color: 'secondary.darker', textAlign: 'center' }}>
				Your profile has been created and you are now ready to start participating in challenges that match your interests and coding experience level.
			</Typography>
		</Stack>
	);
}