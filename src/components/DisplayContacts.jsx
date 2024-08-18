import React from "react";
import "./DisplayContacts.css";
export default function DisplayContacts({ contactList, deleteContact }) {
	const deleteContactHandler = (contactid) => {
		deleteContact(contactid);
	};
	return (
		<div className="displayContacts mt-4 border-2 border-light rounded-xl p-8">
			<h2 className="text-center text-2xl tracking-wider">Contacts</h2>

			<ul>
				{contactList.map((contact) => {
					return (
						<li
							key={contact.id}
							className="m-4 border-t-2 border-b-2 border-gray-200 p-2 flex justify-between"
						>
							<p>
								{contact.name} - {contact.email}
							</p>
							<button
								onClick={() => deleteContactHandler(contact.id)}
								className="border-2 rounded-md text-red-500 border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
							>
								<i className="fa-solid fa-trash"></i>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
