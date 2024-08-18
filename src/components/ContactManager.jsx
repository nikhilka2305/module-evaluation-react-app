import React, { useEffect, useState } from "react";
import "./ContactManager.css";
import AddContact from "./AddContact";
import DisplayContacts from "./DisplayContacts";
export default function ContactManager() {
	return (
		<main className="contactManager">
			<h2 className="text-center text-3xl tracking-widest font-bold">
				Add Contact
			</h2>

			<AddContact />

			<DisplayContacts />
		</main>
	);
}
