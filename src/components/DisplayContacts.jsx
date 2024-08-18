import React from "react";
import "./DisplayContacts.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../features/contactManagement/contactManageSlice";
export default function DisplayContacts() {
	const contactList = useSelector((state) => {
		return state.contacts.contactList;
	});
	const dispatch = useDispatch();
	const deleteContactHandler = (contactid) => {
		dispatch(deleteContact(contactid));
	};
	return (
		<div className="displayContacts mt-8 border-2 border-black rounded-xl p-8">
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
								<i className="fa-regular fa-user mx-4 sm:mx-8 text-2xl"></i>
								<div className="details">
									<h5 className="text-xl md:text-2xl font-semibold">
										{contact.name}{" "}
									</h5>
									<p className="text-lg md:text-xl font-extralight">
										{contact.email}
									</p>
								</div>
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
