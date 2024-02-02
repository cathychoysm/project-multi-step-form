import {
	FormControl,
	Grid,
	InputLabel,
	TextField
} from "@mui/material";
import SectionTitle from "./SectionTitle";
import { InputProps } from "../Form/Form";
import { ReactElement } from "react";
import { Field } from "formik";

interface TextFieldSetProps {
	name: string;
	type: string;
	label: string;
	placeholder: string;
	error: string | boolean | undefined;
	touch: string | boolean | undefined;
}

export default function Step1({ values, touched, errors }: InputProps): ReactElement {
	const TextFieldSet = ({ name, type, label, placeholder, error, touch }: TextFieldSetProps) => (
		<Grid item xs={6}>
			<FormControl fullWidth>
				<InputLabel
					htmlFor="name"
					sx={{ transform: 'none', top: '-25px', color: 'primary.main', fontWeight: 500 }}
				>
					{label}
				</InputLabel>
				<Field
					name={name}
					type={type}
					as={TextField}
					variant="outlined"
					placeholder={placeholder}
					error={Boolean(error && touch)}
					helperText={Boolean(touch) && error}
					sx={{
						borderRadius: '10px'
					}}
				/>
			</FormControl>
		</Grid>
	);

	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<SectionTitle title="Personal Information" description="Please provide your personal details so we can get to know you better." />
			</Grid>
			{TextFieldSet({
				name: "name",
				type: "text",
				label: "Full Name",
				placeholder: "Your Name",
				error: errors.name,
				touch: touched.name
			})}
			{TextFieldSet({
				name: "email",
				type: "email",
				label: "Email",
				placeholder: "name@email.com",
				error: errors.email,
				touch: touched.email
			})}
			{TextFieldSet({
				name: "phone",
				type: "text",
				label: "Phone Number",
				placeholder: "+91 1234567890",
				error: errors.phone,
				touch: touched.phone
			})}
			{TextFieldSet({
				name: "link",
				type: "text",
				label: "Portfolio/GitHub Link",
				placeholder: "github.com/rishipurwar1",
				error: errors.link,
				touch: touched.link
			})}
		</Grid>
	);
}