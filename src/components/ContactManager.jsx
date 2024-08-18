import React, { useEffect, useState } from "react";
import "./ContactManager.css";
import AddContact from "./AddContact";
import DisplayContacts from "./DisplayContacts";
import { v4 as uuid } from "uuid";
export default function ContactManager() {
	const LOCAL_STORAGE_NAME = "contacts";
	const getLocalData = () => {
		const contactsJSON = localStorage.getItem(LOCAL_STORAGE_NAME);
		const contactsData = JSON.parse(contactsJSON);
		console.log(contactsData);
		return contactsData || [];
	};
	const [contacts, setContacts] = useState(getLocalData);
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(contacts));
	}, [contacts]);
	const addContactHandler = (name, email) => {
		let contactId = uuid();
		setContacts((oldcontacts) => {
			return [...oldcontacts, { id: contactId, name: name, email: email }];
		});
	};
	const deleteContactHandler = (id) => {
		setContacts((oldContacts) => {
			return oldContacts.filter((contact) => {
				return contact.id !== id;
			});
		});
		console.log(id);
	};

	return (
		<main className="contactManager">
			<h2 className="text-center text-2xl tracking-widest">Add Contact</h2>
			<AddContact addContact={addContactHandler} />
			<DisplayContacts
				contactList={contacts}
				deleteContact={deleteContactHandler}
			/>
		</main>
	);
}
