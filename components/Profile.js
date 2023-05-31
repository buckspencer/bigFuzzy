import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react";
import React, { useState } from "react";

import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import petImage from "../assets/pet_image.jpg";

const product = {
	name: "Your Big Fuzzy has been found",
	href: "#",
	price: "$20",
	description:
		"Gazing out from the palace balcony, Queen Mina of the Kingdom of the Sun watched as her beloved royal cat, Kiki, played in the courtyard below. Kiki had been born in the distant land of the Moon, a place of lush forests and rolling hills, where the sun shone brightly and the stars twinkled in the night sky. \
    Kiki had grown up in the Moon's royal palace, surrounded by the love and care of the Queen and her court. She had been taught to hunt and play, and to always show respect for her elders. She had been given the best of everything, and had grown into a beautiful and graceful cat. \
    When Queen Mina had heard of Kiki's beauty and grace, she had sent a royal envoy to the Moon to bring Kiki to her palace in the Kingdom of the Sun. Kiki had been welcomed with open arms, and had quickly become a beloved member of the royal court. \
    Now, as Kiki played in the courtyard, Queen Mina smiled, knowing that her beloved royal cat had found a home in her kingdom. Kiki had come a long way from the distant land of the Moon, and Queen Mina was proud to have her as part of her court.",
	imageSrc:
		"https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
	imageAlt:
		"Model wearing light green backpack with black canvas straps and front zipper pouch.",
	sizes: [
		{ name: "5x5", description: "" },
		{ name: "4x6", description: "" },
	],
};
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Profile = (props) => {
	const { petDetails } = props;
	const [pet, setPet] = useState(petDetails[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

	return (
		<div className="bg-[#B6D6CC]">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				{/* Product details */}
				<div className="lg:max-w-lg lg:self-end">
					<div className="mt-4">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{pet.name}
						</h1>
					</div>

					<section aria-labelledby="information-heading" className="mt-4">
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>

						<div className="flex items-center">
							<p className="text-lg text-gray-900 sm:text-xl">
								{product.price}
							</p>
						</div>

						<div className="mt-4 space-y-6">
							<p className="text-base text-gray-500">{pet.originStory}</p>
						</div>

						<div className="flex"></div>
					</section>
				</div>

				{/* Product image */}
				<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
					<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
						<Image
							src={pet.image}
							alt="Generated Pet Image"
							className="h-full w-full object-cover object-center"
							width={500}
							height={500}
							priority
						/>
					</div>
				</div>

				{/* Product form */}
				<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
					<section aria-labelledby="options-heading">
						<h2 id="options-heading" className="sr-only">
							Product options
						</h2>

						<form>
							<div className="sm:flex sm:justify-between">
								{/* Size selector */}
								<RadioGroup value={selectedSize} onChange={setSelectedSize}>
									<RadioGroup.Label className="block text-sm font-medium text-gray-700">
										Canvas Size
									</RadioGroup.Label>
									<div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
										{product.sizes.map((size) => (
											<RadioGroup.Option
												as="div"
												key={size.name}
												value={size}
												className={({ active }) =>
													classNames(
														active ? "ring-2 ring-indigo-500" : "",
														"relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none"
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label
															as="p"
															className="text-base font-medium text-gray-900"
														>
															{size.name}
														</RadioGroup.Label>
														<RadioGroup.Description
															as="p"
															className="mt-1 text-sm text-gray-500"
														>
															{size.description}
														</RadioGroup.Description>
														<div
															className={classNames(
																active ? "border" : "border-2",
																checked
																	? "border-indigo-500"
																	: "border-transparent",
																"pointer-events-none absolute -inset-px rounded-lg"
															)}
															aria-hidden="true"
														/>
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

							<div className="mt-10">
								<button
									type="submit"
									className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
								>
									Order Portrait
								</button>
							</div>
							<div className="mt-6 text-center">
								<a href="#" className="group inline-flex text-base font-medium">
									<ShieldCheckIcon
										className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
									<span className="text-gray-500 hover:text-gray-700">
										Lifetime Guarantee
									</span>
								</a>
							</div>
						</form>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Profile;
