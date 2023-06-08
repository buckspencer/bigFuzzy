import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../sanity/lib/image";

const LandingScreen = ({ recentPets }) => {
	return (
		<div>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Create digital royal pet portraits with Big Fuzzy. Each artwork is
				tokenized for authenticity. Get the complete package: digital portrait,
				origin story, canvas print, and stamped medallion. Store, trade, and
				display securely. Experience the intersection of art, blockchain, and
				royal pets. Unleash their regal value with Big Fuzzy. Start your journey
				today!
			</p>
			{recentPets && (
				<ul
					role="list"
					className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
				>
					{recentPets.map((pet) => (
						<Link key={pet._id} href={`/adoption/${pet._id}`}>
							<li className="relative">
								<div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
									<Image
										src={urlForImage(pet.image).width(500).url()}
										alt=""
										className="pointer-events-none object-cover group-hover:opacity-75"
										width={80}
										height={80}
										priority
									/>
									<button
										type="button"
										className="absolute inset-0 focus:outline-none"
									>
										<span className="sr-only">View details for {pet.name}</span>
									</button>
								</div>
								<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
									{pet.name}
								</p>
							</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	);
};

export default LandingScreen;
