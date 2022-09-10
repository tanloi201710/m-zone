import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMdVolumeLow } from "react-icons/io";

const PlayList = () => {
  const initialList = [
    {
      name: "Pull Up",
      artist: "Summerella",
    },
    {
      name: "Fireworks",
      artist: "Kygo",
    },
    {
      name: "I Wanna Be In the Cavalry",
      artist: "Jeremy Scott",
    },
    {
      name: "Blind Me",
      artist: "Fifty",
    },
    {
      name: "Pull Up 1",
      artist: "Summerella",
    },
    {
      name: "Fireworks 1",
      artist: "Kygo",
    },
    {
      name: "I Wanna Be In the Cavalry 1",
      artist: "Jeremy Scott",
    },
    {
      name: "Blind Me 1",
      artist: "Fifty",
    },
  ];

  const [list, setList] = useState(initialList);

  const removeItem = (index: number) => {
    setList((items) => items.filter((item, id) => id !== index));
  };
  return (
    <div className="border-[1px] border-gray-400/25 text-gray-200">
      <ul className="bg-[#363c43]">
        {list.map((item, index) => (
          <li
            className="h-10 flex justify-between items-center border-b-[1px] border-b-gray-400/50 pl-3 pr-2"
            key={item.name}>
            <div className="h-full flex gap-3 items-center font-semibold">
              <span className="text-gray-400 text-xs">{index + 1}</span>
              <span className="text-xs">{item.name}</span>
              <span className="text-gray-400 text-[10.2px]">{item.artist}</span>
            </div>
            <button
              className="text-gray-400 h-full"
              onClick={() => removeItem(index)}>
              <MdClose size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
