import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { SiApplemusic } from "react-icons/si";
import { collections, mains } from "../utils/constants";
import ListItem from "./ListItem";

const ProfileMenu = ({ profileMenuEl, blur }: any) => {
  return (
    <div
      className="rounded-[3px] text-gray-600 text-sm py-1 absolute bottom-14 bg-white w-full outline-none"
      tabIndex={0}
      ref={profileMenuEl}
      onBlur={blur}
    >
      <ul>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          <Link href="/?tab=profile">Profile</Link>
        </li>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          <Link href="/?tab=Tracks">Tracks</Link>
        </li>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          <Link href="/?tab=Playlists">Playlists</Link>
        </li>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          <Link href="/?tab=Likes">Likes</Link>
        </li>
      </ul>
      <div className="w-full h-[1.5px] bg-gray-400/50"></div>
      <ul>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          Need help?
        </li>
        <li className="leading-7 cursor-pointer hover:bg-gray-200 px-4">
          Sign out
        </li>
      </ul>
    </div>
  );
};

const Sidebar = ({ user }: {user: { name: string; image: string; email: string }}) => {
  const active = false;
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState<boolean>(false);

  const handleCloseProfileMenu = (event: any) => {
    event.preventDefault();
    setTimeout(() => {
      setIsOpenProfileMenu(false);
    }, 200);
  };
  const profileMenuEl = useCallback((divElement: any) => {
    if (divElement) {
      divElement.focus();
    }
  }, []);
  return (
    <div className="w-[200px] hidden lg:block">
      {/* Logo */}
      <div className="min-h-[56px] flex items-center">
        <Link href="/">
          <div className="flex flex-row gap-3 items-center ml-4 cursor-pointer">
            <p className="text-2xl">
              <SiApplemusic color="white" />
            </p>
            <span className="inline-block leading-3 font-bold text-xl text-gray-200">
              Mzone
            </span>
          </div>
        </Link>
      </div>
      {/* main */}
      <div className="w-auto">
        <ul className="m-2">
          <li className="p-2">
            <span className="text-gray-400 text-xs">Main</span>
          </li>
          {mains.map((item) => (
            <ListItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
      {/* your collection */}
      <div className="w-auto">
        <ul className="m-2">
          <li className="p-2">
            <span className="text-gray-400 text-xs">Your Collection</span>
          </li>
          {collections.map((item) => (
            <ListItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
      {/* user */}
      <div className="absolute w-full bottom-0 left-0 px-4 py-3">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsOpenProfileMenu((prev) => !prev)}
        >
          <Image
            src={user.image}
            width={32}
            height={32}
            alt="profile"
            layout="fixed"
            className="rounded-full overflow-hidden"
          />
          <span className="text-gray-200 text-sm font-bold">
            {/* Rachel Platten */}
            {user.name}
          </span>
        </div>
      </div>
      {isOpenProfileMenu && (
        <ProfileMenu
          profileMenuEl={profileMenuEl}
          blur={handleCloseProfileMenu}
        />
      )}
    </div>
  );
};

export default Sidebar;
