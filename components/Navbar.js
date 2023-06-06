/* eslint-disable @next/next/no-html-link-for-pages */
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import { createOrGetUser } from "@/utils";
import logo from "../assets/logo.svg";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<>
			<div className="bg-[#B6D6CC] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<Link href="/">
							<Image
								src={logo}
								alt="Pet Boutique"
								className=""
								style={{ width: "auto", height: "2em" }}
							/>
						</Link>
						{user && (
							<a
								href="/gallery"
								className="mt-2 ml-9 text-md font-extralight text-gray-600 hover:text-gray-900"
							>
								Gallery
							</a>
						)}
					</div>
					<>
						{user ? (
							<div className="flex gap-2 md:gap-6">
								{user.picture && (
									<Link href="/">
										<Image
											width={40}
											height={40}
											className="rounded-full cursor-pointer"
											src={user.picture}
											alt="profile photo"
										/>
									</Link>
								)}
								<a
									href="/api/auth/logout"
									className="mt-2 text-2xl font-extralight text-gray-600 hover:text-gray-900"
								>
									Logout
								</a>
							</div>
						) : (
							<a
								href="/api/auth/login"
								className="mt-2 text-2xl font-extralight text-gray-600 hover:text-gray-900"
							>
								Login
							</a>
						)}
					</>
				</div>
			</div>
		</>
	);
};
export default Navbar;
