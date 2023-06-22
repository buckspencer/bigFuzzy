import Image from "next/image";
import React from "react";
import crown from "../assets/crown.svg";

const PetInformation = ({ originStory }) => {
	return (
		<>
			<h1 className="w-2/3 text-xl font-bold tracking-tight text-gray-900 sm:mt-10 relative">
				Is{" "}
				<Image
					src={crown}
					alt="Crown"
					width={24}
					height={24}
					className="absolute -top-4 left-8"
				/>
				<span className="text-[#B388EB] font-bold">
					{originStory?.name || "Missing Information"}
				</span>{" "}
				the Big Fuzzy you were looking for?!{" "}
			</h1>
			<p className="w-2/3 text-gray-700 mt-3 text-sm">
				{originStory?.story || "Missing Information"}
			</p>
		</>
	);
};

export default PetInformation;
