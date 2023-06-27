import { Dialog, Listbox, Transition } from "@headlessui/react";
import {
	FaceFrownIcon,
	FaceSmileIcon,
	FireIcon,
	HandThumbUpIcon,
	HeartIcon,
	PaperClipIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";

import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";

const moods = [
	{
		name: "Excited",
		value: "excited",
		icon: FireIcon,
		iconColor: "text-white",
		bgColor: "bg-red-500",
	},
	{
		name: "Loved",
		value: "loved",
		icon: HeartIcon,
		iconColor: "text-white",
		bgColor: "bg-pink-400",
	},
	{
		name: "Happy",
		value: "happy",
		icon: FaceSmileIcon,
		iconColor: "text-white",
		bgColor: "bg-green-400",
	},
	{
		name: "Sad",
		value: "sad",
		icon: FaceFrownIcon,
		iconColor: "text-white",
		bgColor: "bg-yellow-400",
	},
	{
		name: "Thumbsy",
		value: "thumbsy",
		icon: HandThumbUpIcon,
		iconColor: "text-white",
		bgColor: "bg-blue-500",
	},
	{
		name: "I feel nothing",
		value: null,
		icon: XMarkIcon,
		iconColor: "text-gray-400",
		bgColor: "bg-transparent",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const ChatModal = ({ pet }) => {
	const [selected, setSelected] = useState(moods[5]);
	const [open, setOpen] = useState(true);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
								<div className="flex items-start space-x-2">
									<div className="flex-shrink-0 mt-4">
										<Image
											className="inline-block h-10 w-10 rounded-full"
											src={urlForImage(pet.image).width(50).url()}
											width={50}
											height={50}
											alt=""
										/>
									</div>
									<div className="min-w-0 flex-1">
										<form action="#" className="relative">
											<div className="overflow-hidden mt-6 mr-6 rounded-lg shadow-sm ring-1 ring-inset ring-black focus-within:ring-2 focus-within:ring-black scrollbar-thumb-black">
												<label htmlFor="comment" className="sr-only">
													Whats up?
												</label>
												<textarea
													rows={5}
													name="comment"
													id="comment"
													className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 overflow-y-scroll"
													placeholder="Whats up..."
													defaultValue={
														"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
													}
												/>
											</div>
										</form>
										<div className="flex float-right mt-2">
											<button
												type="submit"
												className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
											>
												Submit
											</button>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ChatModal;
