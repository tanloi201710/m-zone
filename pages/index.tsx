import type { NextPage } from "next";
import { getProviders, getSession, signIn, signOut, useSession } from "next-auth/react";
import MainContent from "../components/MainContent";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { albums } from "../utils/constants";

interface Props {
  session: {
    user: { name: string; image: string; email: string },
    expires: string,
  };
}

const Home: NextPage<Props> = (props) => {
  console.log(props.session);
  // const handleAddArtist = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const { origin } = window.location;
  //     const savedArtist = await fetch(origin + "/api/artists", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: "Vũ",
  //         isMale: true,
  //         age: 30,
  //       }),
  //     });
  //     const { data } = await savedArtist.json();
  //     console.log(data);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };
  return (
    <>
      <div className="flex h-[calc(100vh_-_55px)]">
        {/* Sidebar */}
        <div className="overflow-hidden xl:overflow-auto bg-[#30363c] relative">
          <Sidebar user={props.session.user} />
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
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
