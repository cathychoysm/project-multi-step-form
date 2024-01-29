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

export default function ProgressBar({ step, setStep }: StepStateProps): ReactElement {
	const handleStep = (index: number) => () => {
		setStep(index);
	};

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
				[...Array(4)].map((value, index) => {
					return (
						<Step key={index} completed={index <= step ? true : false}>
							<StepButton onClick={handleStep(index)}>
								<StepLabel StepIconComponent={StepIcon} />
							</StepButton>
						</Step>
					)
				})
			}
		</Stepper>
	)
}