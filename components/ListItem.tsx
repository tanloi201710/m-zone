import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  item: {
    name: string;
    icon: JSX.Element;
  };
}

const ListItem: NextPage<Props> = ({ item }) => {
  const router = useRouter();
  const { tab } = router.query;
  const active: boolean = item.name === tab;

  return (
    <li key={item.name}>
      <Link href={`/?tab=${item.name}`}>
        <div
          className={`px-2 my-[2px] h-7 hover:bg-[#ffffff11] ${
            active ? "bg-[#02b875]" : ""
          } cursor-pointer rounded-[3px]`}>
          <span
            className={`float-left flex items-center h-7 mr-4 min-w-[1.5rem] ${
              active ? "text-gray-100" : "text-gray-300"
            }`}>
            {item.icon}
          </span>
          <span
            className={`py-1 h-7 font-semibold ${
              active ? "text-gray-100" : "text-gray-400"
            } text-sm`}>
            {item.name}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
