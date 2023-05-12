import { GoogleLogin, googleLogout } from "@react-oauth/google";

import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.svg";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src={logo}
                alt="Pet Boutique"
                className=""
                width={100}
                height={24}
                priority
              />
            </div>
          </div>
          <div>
            {userProfile ? (
              <div className="flex gap-5 md:gap-10">
                {userProfile.image && (
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
                onSuccess={(response) => createOrGetUser(response, addUser)}
                onError={() => console.log("Error")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
