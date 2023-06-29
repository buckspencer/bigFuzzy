import React, { useRef, useState } from "react";

import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const VisitationScreen = ({ petInfo }) => {
	const modalRef = useRef();
	const [chatHistory, setChatHistry] = useState([
		{ isUser: false, message: `${petInfo.name} has missed you!` },
	]);
	const [chatQuery, setChatQuery] = useState("");
	const { user, error, isLoading } = useUser();
	const [isSending, setIsSending] = useState(false);

	const chatAvatar = (isUser) => {
		return isUser ? user.picture : urlForImage(petInfo.image).width(50).url();
	};

	const handleChat = async () => {
		setIsSending(true);
		setChatHistory(true, chatQuery);
		try {
			const response = await fetch("/api/queryFuzzyChat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ petInfo: petInfo, message: chatQuery }),
			});

			if (response.ok) {
				const resp = await response.json();
				setChatHistory(false, resp.trim());
				setIsSending(false);
			} else {
				console.error("Failed to engage chat:", resp.statusText);
			}
		} catch (error) {
			console.error("Error creating entering chat:", error);
		}
	};

	const handleLeave = (modal) => {
		// Add a delay using setTimeout
		setChatHistory(false, "Goodbye, Thank you for visiting me!");
		setTimeout(() => {
			// Close the modal
			modal.close();
		}, 1900); // Change the delay time as desired (in milliseconds)
	};

	const setChatHistory = (isUser, message) => {
		setChatHistry((prevChatHistory) => [
			...prevChatHistory,
			{ isUser, message },
		]);
	};

	return (
		<div className="relative bg-fuzzy-blue w-4/5">
			<div className="mb-8 md:mt-20 md:absolute md:left-8 md:h-full md:w-1/3 lg:w-1/2">
				<Image
					className="object-cover"
					src={urlForImage(petInfo.image).width(600).url()}
					alt="fuzzy-image"
					width={600}
					height={600}
				/>
			</div>
			<div className="relative mx-auto max-w-7xl lg:px-8">
				<div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
					<p className="text-sm font-bold tracking-tight text-slate-700">
						Royal Name:
					</p>
					<p className="text-3xl font-bold tracking-tight text-slate-950 ml-1 sm:text-4xl">
						{petInfo.name}
					</p>
					<p className="mt-6 text-sm font-bold tracking-tight text-slate-700">
						Special Interest:
					</p>
					<p className="text-l font-bold tracking-tight text-slate-800 ml-1 sm:text-4xl">
						{petInfo.uniqueTrait}
					</p>
					<p className="mt-6 text-sm font-bold tracking-tight text-slate-700">
						Origin Story:
					</p>
					<p className="text-base leading-7 text-slate-800 ml-1">
						{petInfo.originStory}
					</p>
					<div className="mt-8">
						<button
							href="#"
							className="inline-flex rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							onClick={() => window.my_modal_4.showModal()}
						>
							Talk to {petInfo.name}
						</button>
					</div>
					<dialog ref={modalRef} id="my_modal_4" className="modal">
						<form method="dialog" className="modal-box w-11/12 max-w-5xl">
							{chatHistory.map((chat, index) => (
								<div
									key={index}
									className={`chat ${chat.isUser ? "chat-end" : "chat-start"}`}
								>
									<div className="chat-image avatar">
										<div className="w-10 rounded-full">
											<Image
												className="inline-block h-10 w-10 rounded-full"
												src={chatAvatar(chat.isUser)}
												width={50}
												height={50}
												alt=""
											/>
										</div>
									</div>
									<div className="chat-bubble">{chat.message}</div>
								</div>
							))}
							{isSending && (
								<div className="chat chat-start">
									<div className="chat-image avatar">
										<div className="w-10 rounded-full">
											<Image
												className="inline-block h-10 w-10 rounded-full"
												src={chatAvatar(false)}
												width={50}
												height={50}
												alt=""
											/>
										</div>
									</div>
									<div className="chat-bubble">
										<span className="loading loading-dots loading-md"></span>
									</div>
								</div>
							)}
							<div className="modal-action">
								<input
									type="chatQuery"
									name="chatQuery"
									id="chatQuery"
									className="input w-full max-w-4xl"
									placeholder="Speak to me!"
									value={chatQuery}
									onChange={(e) => setChatQuery(e.target.value)}
								/>
								<button
									type="submit"
									className="inline-flex items-center rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
									onClick={(event) => {
										event.preventDefault();
										handleChat();
										setChatQuery("");
									}}
								>
									Submit
								</button>
								<button
									className="btn"
									onClick={(event) => {
										event.preventDefault();
										handleLeave(modalRef.current);
									}}
								>
									Leave
								</button>
							</div>
						</form>
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default VisitationScreen;
