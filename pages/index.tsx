import type { NextPage } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import MainContent from "../components/MainContent";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { albums } from "../utils/constants";

interface Props {
  providers: object[];
}

const Home: NextPage<Props> = (props) => {
  const { data: session }: any = useSession();
  console.log(props.providers);
  const handleAddArtist = async (e: any) => {
    e.preventDefault();
    try {
      const { origin } = window.location;
      const savedArtist = await fetch(origin + "/api/artists", {
        method: "POST",
        body: JSON.stringify({
          name: "Vũ",
          isMale: true,
          age: 30,
        }),
      });
      const { data } = await savedArtist.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <div className="flex h-[calc(100vh_-_55px)]">
        {/* Sidebar */}
        <div className="overflow-hidden xl:overflow-auto bg-[#30363c] relative">
          <Sidebar />
        </div>
        {/* Main */}
        <div className="flex flex-col gap-10 overflow-auto flex-1 bg-[#363c43] text-gray-200">
          <MainContent />
        </div>
      </div>
      <Player album={albums[3]} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
