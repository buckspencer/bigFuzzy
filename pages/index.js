import { useEffect, useState } from "react";

import Image from "next/image";
import LandingScreen from "../components/LandingScreen";
import Link from "next/link";
import Loader from "@/components/Loader";
import PetInformation from "../components/PetInformation";
import TypewriterLoader from "@/components/TypewriterLoader";
import logo from "../assets/logo.svg";
import petImage from "../assets/pet_image.jpg";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const navigation = {
	main: [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Jobs", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Accessibility", href: "#" },
		{ name: "Partners", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "Instagram",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "Twitter",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "#",
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

export default function Home() {
	const { user, error, isLoading } = useUser();
	const [recentPets, setRecentPets] = useState([]);
	const [animalType, setAnimalType] = useState("");
	const [animalColor, setAnimalColor] = useState("");
	const [petInfo, setPetInfo] = useState({});
	const [typingText, setTypingText] = useState("Searching AI Verse...");
	const [savable, setSavable] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const [petRequested, setPetRequested] = useState(false);
	const router = useRouter();

	const clearFields = async () => {
		setImage("");
		setImageUrl("");
		setAnimalType("");
		setAnimalColor("");
		setPetInfo("");
		setSavable(false);
	};

	const fetchPetsAndUpdateState = async () => {
		try {
			const response = await fetch(`/api/pet/recent`);
			const data = await response.json();
			setRecentPets(data.pets);
		} catch (error) {
			console.error("Error fetching pets:", error);
		}
	};

	const generatePet = async (prompt) => {
		clearFields;
		setPetRequested(true);
		getStory(animalType);

		const response = await fetch("/api/replicateImageCall?" + prompt);
		const data = await response.json();
		setPetRequested(false);

		return data;
	};

	const createPet = async (pet) => {
		try {
			const response = await fetch("/api/createPet", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(pet),
			});

			if (response.ok) {
				const { _id } = await response.json();

				router.push(`/holding/${_id}`);
			} else {
				console.error("Failed to create pet:", response.statusText);
			}
		} catch (error) {
			console.error("Error creating pet:", error);
		}
	};

	const getStory = async (animalType) => {
		try {
			const response = await Promise.race([
				fetch(`/api/getPetInfo?animalType=${animalType}`),
				new Promise((_, reject) =>
					setTimeout(() => reject(new Error("Timeout")), 45000)
				),
			]);
			if (!response.ok) {
				// check for successful response
				throw new Error(response.statusText);
				setTypingText("Big Fuzzy lost, reattempting...");
				triggerNewPetSequence();
			}
			const data = await response.json();
			console.log(data);
			setPetInfo(data);
		} catch (error) {
			console.error("Error fetching pet origin story:", error);
			setTypingText("Big Fuzzy lost, reattempting...");
			triggerNewPetSequence();
		}
	};

	const loaderProp =({ src }) => {
		return src;
	}

	const savePet = () => {
		const pet = {
			_type: "pet",
			userId: user.sub,
			name: petInfo.name,
			imageUrl: imageUrl,
			originStory: petInfo.story,
			uniqueTrait: petInfo.uniqueTrait,
		};

		createPet(pet);
	};

	const triggerNewPetSequence = async () => {
		const text = `${animalColor} ${animalType} wearing royal cloths, 4k photo`;
		const result = await generatePet(text);
		setImageUrl(result[0]);
	};

	useEffect(() => {
		fetchPetsAndUpdateState(setRecentPets);
		if (petInfo && Object.keys(petInfo).length !== 0 && imageUrl) {
			setSavable(true);
		} else {
			setSavable(false);
		}
	}, [petInfo, imageUrl]);

	return (
		<div className="bg-fuzzy-blue">
			<div className="mx-auto px-6 ">
				<div className="mx-auto lg:flex">
					<div className="flex-none mx-auto mt-8 ml-8">
						{petRequested ? (
							<Loader />
						) : (
							<Image
								src={imageUrl || petImage}
								alt="Generated Pet Image"
								className="bg-gray-50 rounded-lg border-double border-2"
								width={500}
								height={500}
								priority
								loader={loaderProp}
							/>
						)}
					</div>
					<div className="mx-auto mt-12 lg:mt-6">
						{imageUrl && petInfo.name ? (
							<PetInformation petInfo={petInfo} />
						) : (
							<LandingScreen />
						)}
						<div className="mt-10">
							<>
								{imageUrl && petInfo.name ? (
									<></>
								) : (
									<>
										<div className="text-center">
											<input
												type="text"
												name="animal-type"
												id=""
												className="w-full lg:w-1/2 rounded-full border-0 pl-3 py-1.5 focus:outline-gray-600 text-gray-600 placeholder:text-gray-400"
												placeholder="What kind of pet do you want..."
												value={animalType}
												onChange={(e) => setAnimalType(e.target.value)}
											/>
										</div>
										<div className="text-center mt-3">
											<input
												type="text"
												name="animal-color"
												id="animal-color"
												className="w-full lg:w-1/2 rounded-full border-0 pl-3 py-1.5 focus:outline-gray-600 text-gray-600 placeholder:text-gray-400"
												placeholder="Pet characteristics..."
												value={animalColor}
												onChange={(e) => setAnimalColor(e.target.value)}
											/>
										</div>
									</>
								)}
								<div className="flex justify-center gap-x-5 mt-6">
									<button
										type="button"
										className="w-1/2 items-center py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-black bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:black disabled:opacity-50"
										onClick={triggerNewPetSequence}
										disabled={(animalColor || animalType) === ""}
									>
										Create your dream pet
									</button>

									{savable && (
										<button
											type="button"
											className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#FA9F42] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
											onClick={savePet}
											hidden={!savable}
										>
											Save Pet!
										</button>
									)}
								</div>
							</>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
