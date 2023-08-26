import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import MainContent from "../components/MainContent";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { albums } from "../utils/constants";
import { useSongsStore } from "../store/useSongsStore";
import { useEffect, useState } from "react";

interface Props {
  session: {
    user: { name: string; image: string; email: string };
    expires: string;
  };
}

const Home: NextPage<Props> = (props) => {
  const { discovers, isLoading, error, fetchData } = useSongsStore();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    setIsClient(true);
  }, [fetchData]);

  const isNotData = !discovers;

  if (!isClient || isLoading)
    return (
      <div className="flex items-center justify-center bg-[#30363c] h-screen w-screen">
        <h1 className="text-white text-4xl">Loading...</h1>
      </div>
    );

  return (
    <>
      <div className="flex h-[calc(100vh_-_55px)]">
        {/* Sidebar */}
        <div className="overflow-hidden xl:overflow-auto bg-[#30363c] relative hidden lg:block">
          <Sidebar user={props.session.user} />
        </div>
        {/* Main */}
        <div className="flex flex-col sm:gap-10 overflow-auto flex-1 bg-[#363c43] text-gray-200">
          {!isNotData && (
            <MainContent user={props.session.user} discovers={discovers} />
          )}
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
