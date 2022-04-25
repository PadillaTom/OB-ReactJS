import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Models:
import { User } from "../../models/user.class";
import { ROLES } from "../../models/roles.enum";

const RegisterFormik = () => {
	// User Stuff
	let user = new User();

	// Form  Stuff:
	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.min(3, "> 3 char")
			.max(15, "Muy Largo")
			.required("Oblig"),
		email: Yup.string().email("Email Valido").required("Oblig"),
		password: Yup.string().min(6, "> 6 char").required("Oblig"),
		confirm: Yup.string()
			.when("password", {
				is: (value) => (value && value.length > 0 ? true : false),
				then: Yup.string().oneOf([Yup.ref("password")], "Deben Coincidir"),
			})
			.required("Debe Confirmar"),
		role: Yup.string()
			.oneOf([ROLES.USER, ROLES.ADMIN], "Seleccionar")
			.required("Oblig"),
	});
	const initialValues = {
		username: "",
		email: "",
		password: "",
		confirm: "",
		role: ROLES.User,
	};

	const handleSubmit = (values) => {
		alert("Register User");
	};
	return (
		<div>
			<h4>Register Form</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{/* FORM */}
				{({ errors, touched, isSubmitting }) => {
					return (
						<Form>
							{/* User */}
							<label htmlFor="username">username</label>
							<Field
								id="username"
								name="username"
								placeholder="Cosme"
							/>
							{errors.username && touched.username && (
								<ErrorMessage name="username" component="div"></ErrorMessage>
							)}
							{/* Email */}
							<label htmlFor="email">Email</label>
							<Field id="email" name="email" placeholder="cosme@fulanito.com" />
							{errors.email && touched.email && (
								<ErrorMessage name="email" component="div"></ErrorMessage>
							)}
							{/* Password */}
							<label htmlFor="password">Password</label>
							<Field id="password" name="password" />
							{errors.password && touched.password && (
								<div className="error-msg">
									<ErrorMessage name="password" component="div"></ErrorMessage>
								</div>
							)}
							{/* Confirm Password */}
							<label htmlFor="confirm">Confirmar</label>
							<Field id="confirm" name="confirm" />
							{errors.confirm && touched.confirm && (
								<div className="error-msg">
									<ErrorMessage name="confirm" component="div"></ErrorMessage>
								</div>
							)}
							<button type="submit">Submit</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default RegisterFormik;
