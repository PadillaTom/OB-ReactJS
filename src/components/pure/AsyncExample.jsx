import React from "react";

const AsyncExample = () => {
	// SESSION:
	async function saveSessionStorage(key, value) {
		sessionStorage.setItem(key, value);
		return Promise.resolve(sessionStorage.getItem(key));
	}
	function showStorage() {
		saveSessionStorage("name", "Tomas")
			.then((response) => {
				alert(response);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				console.log("Finally Saved");
			});
	}

	// MESSAGE:
	async function obtainMessage() {
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Hello World");
			}, 2000);
		});
		let message = await promise;
		await alert("Message is: " + message);
	}

	// ERROR:
	const returnError = async () => {
		await Promise.reject(new Error("Oooops!"));
	};
	const consumeError = () => {
		returnError()
			.then((res) => {
				alert("Is ok: " + res);
			})
			.catch((err) => {
				alert("Error: " + err.message);
			})
			.finally(() => {
				console.log("Finally");
			});
	};

	// URL:
	const urlNotFound = async () => {
		try {
			let response = await fetch("https://invalidURL");
			alert("Response: " + JSON.stringify(response));
		} catch (error) {
			alert("Error URL: " + error.message);
		}
	};

	// MULTIPLE:
	const multiplePromise = async () => {
		let results = await Promise.all([
			fetch("https://regres.in/api/users"),
			fetch("https://regres.in/api/users?page=2"),
		]).catch((err) => {
			alert("Error: " + err.message);
		});
	};

	return (
		<div>
			<h2>Async</h2>
			<button onClick={showStorage}>ShowStorage</button>
			<button onClick={obtainMessage}>Message Async</button>
			<button onClick={consumeError}>Error Consume</button>
			<button onClick={urlNotFound}>Consume URL Error</button>
			<button onClick={multiplePromise}>Consume MULTIPLE </button>
		</div>
	);
};

export default AsyncExample;
