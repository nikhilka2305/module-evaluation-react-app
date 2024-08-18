import React, { useState } from "react";
import "./AddContact.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addContact } from "../features/contactManagement/contactManageSlice";
export default function AddContact() {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState("");
	const addContactHandler = (evt) => {
		evt.preventDefault();
		if (name === "" || email === "") {
			setErrors("Enter a valid name and email");
		} else {
			dispatch(addContact({ id: uuid(), name: name, email: email }));
			setName("");
			setEmail("");
			setErrors("");
		}
	};
	return (
		<form
			action=""
			className="size-full border-2 border-black p-8 rounded-xl mt-4 flex flex-col items-start"
			onSubmit={addContactHandler}
		>
			{errors && (
				<p className="text-center self-stretch text-red-500 bg-red-200 border border-red-600 mb-4 tracking-wider rounded-lg px-2 text-base">
					Enter valid name & Email
				</p>
			)}
			<label
				htmlFor="name"
				className="text-md font-semibold leading-6 text-gray-900 m-0 tracking-wider"
			>
				Name
			</label>
			<input
				type="text"
				htmlFor="name"
				placeholder="Name"
				className="block flex-1 border-0 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 tracking-wider focus:ring-0 size-full rounded-md my-4"
				value={name}
				onChange={(evt) => {
					setName(evt.target.value);
				}}
				// required
			/>
			<label
				htmlFor="email"
				className="text-md font-semibold leading-6 text-gray-900 m-0 tracking-wider"
			>
				Email
			</label>
			<input
				type="email"
				htmlFor="name"
				placeholder="Email"
				className="block flex-1 border-0 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 size-full rounded-md my-4 tracking-wider"
				value={email}
				onChange={(evt) => {
					setEmail(evt.target.value);
				}}
				// required
			/>
			<button
				type="submit"
				className="mx-auto mt-6 w-32 rounded-md bg-green-300 px-3 py-2 text-md tracking-wider font-light text-green-950 shadow-lg hover:bg-green-800 hover:text-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
			>
				Add Contact
			</button>
		</form>
	);
}
