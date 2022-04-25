import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
	email: Yup.string().email("Debe ser un email Valido").required("Obligatorio"),
	password: Yup.string().required("Obligatorio"),
});

const LoginForkmik = () => {
	const initialCredentials = {
		email: "",
		password: "",
	};
	return (
		<div>
			<h4>Login Form</h4>
			<Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
					localStorage.setItem("credentials", values);
				}}
			>
				{/* FORM */}
				{({ errors, touched }) => {
					return (
						<Form>
							<label htmlFor="email">Email</label>
							<Field id="email" name="email" placeholder="cosme@fulanito.com" />
							{errors.email && touched.email && (
								<ErrorMessage name="email" component="div"></ErrorMessage>
							)}
							<label htmlFor="password">Password</label>
							<Field id="password" name="password" />
							{errors.password && touched.password && (
								<div className="error-msg">
									<ErrorMessage name="password" component="div"></ErrorMessage>
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

export default LoginForkmik;
