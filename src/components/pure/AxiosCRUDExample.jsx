import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/axiosCRUDService";

const loginSchema = Yup.object().shape({
	email: Yup.string().email("Debe ser un email Valido").required("Obligatorio"),
	password: Yup.string().required("Obligatorio"),
});

const AxiosCRUDExample = () => {
	const initialCredentials = {
		email: "",
		password: "",
	};

	const authUser = ({ email, password }) => {
		login(email, password)
			.then((response) => {
				if (response.data) {
					alert(JSON.stringify(response.data.token));
					sessionStorage.setItem("token", response.data.token);
				} else {
					sessionStorage.removeItem("token");
					throw new Error("Login Error");
				}
			})
			.catch((err) => {
				alert("Error de Login");
				sessionStorage.removeItem("token");
			})
			.finally(() => {
				console.log("Login DONE");
			});
	};
	return (
		<div>
			<h2>AxiosCRUDExample</h2>
			<Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={async (values) => {
					authUser(values);
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
							<button>Login</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default AxiosCRUDExample;
