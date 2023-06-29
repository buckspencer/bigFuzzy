import React, { useRef, useState } from "react";

import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const VisitationScreen = ({ petDetails }) => {
	const modalRef = useRef();
	const [chatHistory, setChatHistry] = useState([
		{ user: false, message: `${petDetails.name} has missed you!` },
	]);
	const [chatQuery, setChatQuery] = useState("");
	const { user, error, isLoading } = useUser();
	const [isSending, setIsSending] = useState(false);

	const chatAvatar = (user) => {
		return user ? user.picture : urlForImage(petDetails.image).width(50).url();
	};

	const handleChat = async () => {
		setIsSending(true);

		try {
			const response = await fetch("/api/queryFuzzyChat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ petInfo: petDetails, message: chatQuery }),
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

	const setChatHistory = (user, message) => {
		setChatHistry((prevChatHistory) => [...prevChatHistory, { user, message }]);
	};

	return (
		<div className="relative bg-fuzzy-blue">
			<div className="relative h-80 overflow-hidden bg-gray md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
				<Image
					className="h-full w-full object-cover"
					src={urlForImage(petDetails.image).width(800).url()}
					alt=""
					width={800}
					height={800}
				/>
				<svg
					viewBox="0 0 926 676"
					aria-hidden="true"
					className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
				>
					<path
						fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
						fillOpacity=".4"
						d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
					/>
					<defs>
						<linearGradient
							id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
							x1="926.392"
							x2="-109.635"
							y1=".176"
							y2="321.024"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#776FFF" />
							<stop offset={1} stopColor="#FF4694" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
					<p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
						{petDetails.name}
					</p>
					<p className="mt-6 text-base leading-7 text-black">
						{petDetails.originStory}
					</p>
					<div className="mt-8">
						<button
							href="#"
							className="inline-flex rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							onClick={() => window.my_modal_4.showModal()}
						>
							Talk to {petDetails.name}
						</button>
					</div>
					<dialog ref={modalRef} id="my_modal_4" className="modal">
						<form method="dialog" className="modal-box w-11/12 max-w-5xl">
							{chatHistory.map((chat, index) => (
								<div
									key={index}
									className={`chat ${user ? "chat-start" : "chat-end"}`}
								>
									<div className="chat-image avatar">
										<div className="w-10 rounded-full">
											<Image
												className="inline-block h-10 w-10 rounded-full"
												src={chatAvatar(chat.user)}
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
