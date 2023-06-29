import { Popover, Transition } from "@headlessui/react";

/* eslint-disable @next/next/no-html-link-for-pages */
import { AiOutlineLogout } from "react-icons/ai";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import clsx from "clsx";
import { createOrGetUser } from "@/utils";
import logo from "../assets/logo.svg";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const MobileNavIcon = ({ open }) => {
	return (
		<svg
			aria-hidden="true"
			className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
		>
			<path
				d="M0 1H14M0 7H14M0 13H14"
				className={clsx(
					"origin-center transition",
					open && "scale-90 opacity-0"
				)}
			/>
			<path
				d="M2 2L12 12M12 2L2 12"
				className={clsx(
					"origin-center transition",
					!open && "scale-90 opacity-0"
				)}
			/>
		</svg>
	);
};

const MobileNavLink = ({ href, children }) => {
	return (
		<Popover.Button as={Link} href={href} className="block w-full p-2">
			{children}
		</Popover.Button>
	);
};

const MobileNavigation = (user) => {
	return (
		<Popover>
			<Popover.Button
				className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
				aria-label="Toggle Navigation"
			>
				{({ open }) => <MobileNavIcon open={open} />}
			</Popover.Button>
			<Transition.Root>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						as="div"
						className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
					>
						<MobileNavLink href="/gallery">Gallery</MobileNavLink>
						<MobileNavLink href={`/visitation/${btoa(user.sub)}`}>
							Fuzzy Visitation
						</MobileNavLink>
						<hr className="m-2 border-slate-300/40" />
						{user ? (
							<MobileNavLink href="/api/auth/logout">Sign out</MobileNavLink>
						) : (
							<MobileNavLink href="/api/auth/login">Sign in</MobileNavLink>
						)}
					</Popover.Panel>
				</Transition.Child>
			</Transition.Root>
		</Popover>
	);
};

const Navbar = () => {
	const { user, error, isLoading } = useUser();
	const router = useRouter();

	const triggerPageReload = async () => {
		if (router.asPath !== "/") {
			router.push("/");
		} else {
			window.location.reload();
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<>
			<div className="bg-fuzzy-blue mx-auto max-w-7xl px-24">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-shrink-0 items-center">
						<button onClick={triggerPageReload}>
							<Image
								src={logo}
								alt="Pet Boutique"
								className=""
								style={{ width: "auto", height: "2em" }}
							/>
						</button>
						{user && (
							<div className="hidden md:flex md:gap-x-6">
								<Link
									href="/gallery"
									className="mt-2 ml-9 text-md font-extralight text-gray-600 hover:text-gray-900"
								>
									Gallery
								</Link>
								<Link
									href={`/visitation/${btoa(user.sub)}`}
									className="mt-2 ml-9 text-md font-extralight text-gray-600 hover:text-gray-900"
								>
									Fuzzy Visitation
								</Link>
							</div>
						)}
					</div>
					<div className="hidden md:flex gap-2 md:gap-2 pr-14">
						{user && user.picture && (
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
						<div className="hidden md:flex">
							{user ? (
								<a
									href="/api/auth/logout"
									className="mt-2 text-md font-extralight text-gray-600 hover:text-gray-900"
								>
									Logout
								</a>
							) : (
								<a
									href="/api/auth/login"
									className="mt-2 text-md font-extralight text-gray-600 hover:text-gray-900"
								>
									Login
								</a>
							)}
						</div>
					</div>
					<div className="-mr-1 md:hidden">
						<MobileNavigation user={user} />
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
