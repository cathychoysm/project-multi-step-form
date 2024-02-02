import { ReactElement, useState } from 'react';
import Step1 from '../Steps/Step-1';
import Step2 from '../Steps/Step-2';
import Step3 from '../Steps/Step-3';
import Step4 from '../Steps/Step-4';
import Step5 from '../Steps/Step-5';
import ProgressBar from './ProgressBar';
import { Divider, Stack } from '@mui/material';
import BackandNext from './BackandNext';
import { Formik, FormikErrors, Form as FormikForm, FormikTouched } from 'formik';
import * as Yup from 'yup';

export type StepStateProps = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	submitForm?: React.MouseEventHandler<HTMLButtonElement>;
	values: FormValues;
	touched: FormikTouched<FormValues>;
	errors: FormikErrors<FormValues>;
	isValid: boolean;
}

interface FormValues {
	name: string;
	email: string;
	phone: string;
	link: string;
	skill: "beginner" | "intermediate" | "advanced" | "expert" | null;
	challenge_preference: Array<string>;
}

export interface InputProps {
	values: FormValues;
	touched: FormikTouched<FormValues>;
	errors: FormikErrors<FormValues>;
}

export default function Form(): ReactElement {
	const [step, setStep] = useState<number>(0);

	function Steps({ values, touched, errors }: InputProps): ReactElement {
		switch (step) {
			case 0:
				return <Step1 values={values} touched={touched} errors={errors} />;
			case 1:
				return <Step2 values={values} touched={touched} errors={errors} />;
			case 2:
				return <Step3 values={values} touched={touched} errors={errors} />;
			case 3:
				return <Step4 values={values} touched={touched} errors={errors} />;
			case 4:
				return <Step5 />;
			default:
				return <Step1 values={values} touched={touched} errors={errors} />;
		};
	};

	const formStyle = {
		backgroundColor: '#FFF',
		maxWidth: "610px",
		minHeight: "495px",
		borderRadius: "16px",
		padding: "30px",
		justifyContent: 'space-around',
		alignItems: 'center'
	}

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				phone: '',
				link: '',
				skill: null,
				challenge_preference: []
			}}
			validationSchema={Yup.object().shape({
				name: Yup.string().required("Required"),
				email: Yup.string().email("Please enter a valid email.").required("Required"),
				phone: Yup.string().required("Required"),
				link: Yup.string().required("Required"),
				skill: Yup.string().required("Required"),
				challenge_preference: Yup.array()
			})}
			onSubmit={(values) => {
				setTimeout(() => {
					setStep(4);
				}, 500);
			}}
		>
			{({ values, submitForm, isValid, touched, errors }) => (
				<FormikForm>
					<Stack sx={formStyle}>
						{ step !== 4 && <ProgressBar step={step} setStep={setStep} values={values} touched={touched} errors={errors} isValid={isValid}/> }
						{ step !== 4 && <Divider flexItem variant='middle' sx={{ borderColor: 'secondary.main', width: 580 }} />}
						<Steps values={values} touched={touched} errors={errors} />
						{ step !== 4 && <Divider flexItem variant='middle' sx={{ borderColor: 'secondary.main', width: 580 }} />}
						{ step !== 4 && <BackandNext step={step} setStep={setStep} submitForm={submitForm} values={values} touched={touched} errors={errors} isValid={isValid}/>}
					</Stack>
				</FormikForm>
			)}
		</Formik>
	)
}