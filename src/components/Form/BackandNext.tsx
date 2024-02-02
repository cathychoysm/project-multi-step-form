import { Button, Stack } from "@mui/material";
import { ReactElement } from "react";
import { StepStateProps } from "./Form";

export default function BackandNext({ step, setStep, submitForm, values, touched, errors, isValid }: StepStateProps): ReactElement {
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

	const step0Validation = (
		errors.name === undefined && touched.name === true &&
		errors.email === undefined && touched.email === true &&
		errors.phone === undefined && touched.phone === true &&
		errors.link === undefined && touched.link === true
	);
	const step1Validation = (
		values.skill !== null
	);

	interface ButtonProps {
		children: string;
		variant: "text" | "outlined" | "contained" | undefined;
		visibility: "hidden" | "visible";
		disabled?: boolean;
		onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	}

	const StyledButton = ({ children, variant, visibility, disabled, onClick }: ButtonProps) => {
		return (
			<Button
				variant={variant}
				color='orange'
				size="large"
				sx={{ marginX: '20px', borderRadius: '10px', fontSize: '14px', visibility: visibility }}
				disabled={disabled}
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
				visibility={(step > 0 && step < 4 ? 'visible' : 'hidden')}
				onClick={handleBack} />
			{step === 3 ?
				<StyledButton
					children="Submit"
					variant="contained"
					visibility={(step < 4 ? 'visible' : 'hidden')}
					disabled={!isValid}
					onClick={submitForm} />
				:
				<StyledButton
					children="Next Step"
					variant="contained"
					visibility={(step < 4 ? 'visible' : 'hidden')}
					disabled={!(step === 0? step0Validation : step1Validation)}
					onClick={handleNext} />
			}
		</Stack>
	)
}