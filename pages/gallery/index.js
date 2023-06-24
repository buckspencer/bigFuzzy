import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";

const Gallery = (props) => {
	const { pets } = props;
	return (
		<div className="bg-fuzzy-blue">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 id="products-heading" className="sr-only">
					Gallery of Fuzzies
				</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{pets.map((pet) => (
						<Link key={pet._id} href={`/pet/${pet._id}`}>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
								<Image
									src={urlForImage(pet.image).width(800).url()}
									alt={pet.imageAlt}
									className="h-full w-full object-cover object-center group-hover:opacity-75"
									width={800}
									height={800}
								/>
							</div>
							<div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
								<h3>{pet.name}</h3>
							</div>
							{/* <p className="mt-1 text-sm italic text-gray-500">
									{pet.description}
								</p> */}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_BASE_URL}/api/pet`);
	const data = await res.json();

	return {
		props: {
			pets: data,
		},
	};
}

export default Gallery;
