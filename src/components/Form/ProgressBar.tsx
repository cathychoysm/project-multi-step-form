import { ReactElement } from "react";
import {
	Step,
	StepButton,
	StepIconProps,
	StepLabel,
	Stepper,
	styled,
} from "@mui/material";
import type { StepStateProps } from './Form';

export default function ProgressBar({ step, setStep, values, touched, errors }: StepStateProps): ReactElement {
	const handleStep = (index: number) => () => {
		setStep(index);
	};

	const step0Validation = (
		errors.name === undefined && touched.name === true &&
		errors.email === undefined && touched.email === true &&
		errors.phone === undefined && touched.phone === true &&
		errors.link === undefined && touched.link === true
	);
	const step1Validation = (
		values.skill !== null
	);
	const StepsDisabled = [
		false,
		!step0Validation,
		!(step0Validation && step1Validation),
		!(step0Validation && step1Validation)
	]

	const StepIconRoot = styled('div')<{
		ownerState: { completed?: boolean; active?: boolean };
	}>(({ theme, ownerState }) => ({
		backgroundColor: theme.palette.secondary.main,
		width: '34px',
		height: '34px',
		color: theme.palette.primary.main,
		fontFamily: 'Poppins',
		fontSize: '14px',
		fontWeight: 500,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		...(ownerState.active && {
			backgroundColor: '#FC6C4C',
			color: '#FFF'
		}),
		...(ownerState.completed && {
			backgroundColor: '#FC6C4C',
			color: '#FFF'
		}),
	}))

	const StepIcon = (props: StepIconProps) => {
		const { active, completed, className } = props;
		return (
			<StepIconRoot ownerState={{ completed, active }} className={className}>
				{props.icon}
			</StepIconRoot>
		)
	}

	const stepConnectorStyle = {
		width: '544px',
		// Basic Style
		"& .MuiStepConnector-line": {
			borderColor: 'secondary.main',
			borderTopWidth: '6px',
			borderRadius: '50px'
		},
		// Active and Completed Style
		"& .Mui-active": {
			"& .MuiStepConnector-line": {
				borderColor: 'orange.main',
				borderTopWidth: '6px',
				borderRadius: '50px'
			}
		},
		"& .Mui-completed": {
			"& .MuiStepConnector-line": {
				borderColor: 'orange.main',
				borderTopWidth: '6px',
				borderRadius: '50px'
			}
		},
	}

	return (
		<Stepper nonLinear activeStep={step} sx={stepConnectorStyle}>
			{
				StepsDisabled.map((disabled, index) => {
					return (
						<Step key={index} completed={index <= step ? true : false}>
							<StepButton onClick={handleStep(index)} disabled={disabled}>
								<StepLabel StepIconComponent={StepIcon} />
							</StepButton>
						</Step>
					)
				})
			}
		</Stepper>
	)
}