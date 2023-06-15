import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react";
import React, { useState } from "react";

import Image from "next/image";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import petImage from "../assets/pet_image.jpg";
import { urlForImage } from "../sanity/lib/image";

const product = {
	name: "Your Big Fuzzy has been found",
	href: "#",
	price: "$20",
	description: "",
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
const HoldingScreen = (props) => {
	const { petDetails } = props;
	const [pet, setPet] = useState(petDetails[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

	return (
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
						<p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
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
						src={urlForImage(pet.image).width(500).url()}
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
	);
};

export default HoldingScreen;
