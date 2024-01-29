import { ReactElement, useState } from 'react';
import Step1 from '../Steps/Step-1';
import Step2 from '../Steps/Step-2';
import Step3 from '../Steps/Step-3';
import Step4 from '../Steps/Step-4';
import Step5 from '../Steps/Step-5';
import ProgressBar from './ProgressBar';
import { Divider, Stack } from '@mui/material';
import BackandNext from './BackandNext';

export type StepStateProps = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Form(): ReactElement {
	const [step, setStep] = useState<number>(0);

	const Steps: React.FC = (): ReactElement => {
		switch (step) {
			case 0:
				return <Step1 />;
			case 1:
				return <Step2 />;
			case 2:
				return <Step3 />;
			case 3:
				return <Step4 />;
			case 4:
				return <Step5 />;
			default:
				return <Step1 />;
		};
	};

	const formStyle = {
		backgroundColor: '#FFF',
		width: "610px",
		height: "495px",
		borderRadius: "16px",
		padding: "30px",
		justifyContent: 'space-around',
		alignItems: 'center'
	}

	return (
		<Stack sx={formStyle}>
				<ProgressBar step={step} setStep={setStep} />
				<Divider flexItem variant='middle' sx={{borderColor: 'secondary.main', width: 580}}/>
				<Steps />
				<Divider flexItem variant='middle' sx={{borderColor: 'secondary.main', width: 580}}/>
				<BackandNext step={step} setStep={setStep} />
		</Stack>
	)
}