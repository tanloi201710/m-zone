import React from "react";
import { albums } from "../utils/constants";
import DiscoverCard from "./DiscoverCard";
import DiscoverSlider from "./DiscoverSlider";
import Footer from "./Footer";
import New from "./New";
import Recommand from "./Recommand";
import Trending from "./Trending";

const MainContent = () => {
  return (
    <div className="px-6 pt-6">
      {/* Discover */}
      <div className="mb-5">
        <h1 className="text-[40px] font-bold mb-4">Discover</h1>
        <div className="grid grid-cols-4 gap-4">
          {/* discover slide */}
          <DiscoverSlider props={albums} />
          {/* discover cards */}
          <DiscoverCard album={albums[3]} />
          <DiscoverCard album={albums[5]} />
          <DiscoverCard album={albums[6]} />
          <DiscoverCard album={albums[7]} />
        </div>
      </div>
      <div className="flex w-full flex-wrap flex-col lg:flex-row">
        <div className="w-full lg:max-w-[calc(100vw_-_609px)] lg:pr-6 py-6 lg:border-r-[1px] lg:border-r-[#78828c21] flex-grow-[999]">
          {/* Trending */}
          <Trending />
          {/* New */}
          <New />
          {/* Recommand for you */}
          <Recommand />
        </div>
        <div className="min-w-[344px] lg:pl-6 h-[590px] sticky top-0 flex-grow">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
