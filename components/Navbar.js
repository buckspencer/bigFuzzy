import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { React, useEffect, useState } from "react";

import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { createOrGetUser } from "@/utils";
import logo from "../assets/logo.svg";
import useAuthStore from "../store/authStore";

const Navbar = () => {
	const { userProfile, addUser, removeUser } = useAuthStore();
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		if (userProfile) {
			setHydrated(true);
		}
	}, [hydrated]);

	return (
		<>
			<div className="bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<Link href="/">
							<>
								<Image
									src={logo}
									alt="Pet Boutique"
									className=""
									style={{ width: "auto", height: "2em" }}
								/>
							</>
						</Link>
					</div>
					<>
						{!!userProfile ? (
							<div className="flex gap-2 md:gap-6">
								{userProfile?.image && (
									<Link href="/">
										<>
											<Image
												width={40}
												height={40}
												className="rounded-full cursor-pointer"
												src={userProfile.image}
												alt="profile photo"
											/>
										</>
									</Link>
								)}
								<button
									key="logOut"
									type="button"
									className="px-2"
									onClick={() => {
										googleLogout();
										removeUser();
									}}
								>
									<AiOutlineLogout color="red" fontSize={21} />
								</button>
							</div>
						) : (
							<GoogleLogin
								key="logIn"
								onSuccess={(response) => createOrGetUser(response, addUser)}
								onError={() => console.log("Error")}
							/>
						)}
					</>
				</div>
			</div>
		</>
	);
};
export default Navbar;
