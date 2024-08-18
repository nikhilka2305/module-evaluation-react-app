import React from "react";
import "./DisplayContacts.css";
export default function DisplayContacts({ contactList, deleteContact }) {
	const deleteContactHandler = (contactid) => {
		deleteContact(contactid);
	};
	return (
		<div className="displayContacts mt-4 border-2 border-black rounded-xl p-8">
			<h2 className="text-center text-3xl tracking-wider font-bold border-b-2 border-gray-500 pb-3">
				Contacts
			</h2>

			<ul>
				{contactList.map((contact) => {
					return (
						<li
							key={contact.id}
							className="m-4 border-b-2 border-gray-500 p-2 flex justify-between"
						>
							<section className="listitem flex justify-start m-0 items-center">
								<i className="fa-regular fa-user mx-2 sm:mx-8"></i>
								<p className="text-xl md:text-2xl">
									{contact.name} - {contact.email}
								</p>
							</section>
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
