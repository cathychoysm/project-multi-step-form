import { Button, Stack } from "@mui/material";
import { ReactElement } from "react";
import { StepStateProps } from "./Form";

export default function BackandNext({ step, setStep }: StepStateProps): ReactElement {
	const handleBack = () => {
		if (step > 0) {
			const previousStep = step - 1;
			setStep(previousStep);
		};
	}
	const handleNext = () => {
		if (step < 4) {
			const nextStep = step + 1;
			setStep(nextStep);
		};
	}

	interface ButtonProps {
		children: string;
		variant: "text" | "outlined" | "contained" | undefined;
		visibility: "hidden" | "visible";
		onClick: React.MouseEventHandler<HTMLButtonElement>;
	}

	const StyledButton = ({ children, variant, visibility, onClick }: ButtonProps) => {
		return (
			<Button
				variant={variant}
				color='orange'
				size="large"
				sx={{ marginX: '20px', borderRadius: '10px', fontSize: '14px', visibility: visibility }}
				onClick={onClick}
			>
				{children}
			</Button>
		)
	}

	return (
		<Stack direction="row" sx={{ width: '100%', justifyContent: 'space-between' }}>
			<StyledButton
				children="Go Back"
				variant="outlined"
				visibility={(step>0&&step<4?'visible':'hidden')}
				onClick={handleBack}/>
			<StyledButton
				children={step===3?"Submit":"Next Step"}
				variant="contained"
				visibility={(step<4?'visible':'hidden')}
				onClick={handleNext}/>
		</Stack>
	)
}