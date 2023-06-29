import Image from "next/image";
import React from "react";
import crown from "../assets/crown.svg";

const PetInformation = ({ petInfo }) => {
	return (
		<div className="mx-auto w-3/5 text-center">
			<h1 className="text-xl font-bold tracking-tight text-gray-900 sm:mt-10 relative">
				Is{" "}
				<Image
					src={crown}
					alt="Crown"
					width={24}
					height={24}
					className="absolute -top-4 left-32"
				/>
				<span className="text-[#B388EB] font-bold">
					{petInfo?.name || "Missing Information"}
				</span>{" "}
				the Big Fuzzy you were looking for?!{" "}
			</h1>
			<p className="text-gray-700 mt-3 text-sm">
				{petInfo?.story || "Missing Information"}
			</p>
		</div>
	);
};

export default PetInformation;
