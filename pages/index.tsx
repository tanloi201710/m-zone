import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import MainContent from "../components/MainContent";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { albums } from "../utils/constants";
import { useSongsStore } from "../store/useSongsStore";
import { useEffect } from "react";

interface Props {
  session: {
    user: { name: string; image: string; email: string };
    expires: string;
  };
}

const Home: NextPage<Props> = (props) => {
  const {
    discovers,
    trendings,
    news,
    recommands,
    isLoading,
    error,
    fetchData,
  } = useSongsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const isNotData = !discovers || !trendings || !news || !recommands;

  return (
    <>
      <div className="flex h-[calc(100vh_-_55px)]">
        {/* Sidebar */}
        <div className="overflow-hidden xl:overflow-auto bg-[#30363c] relative">
          <Sidebar user={props.session.user} />
        </div>
        {/* Main */}
        <div className="flex flex-col gap-10 overflow-auto flex-1 bg-[#363c43] text-gray-200">
          {!isNotData && (
            <MainContent
              discovers={discovers}
              trendings={trendings}
              news={news}
              recommands={recommands}
            />
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
