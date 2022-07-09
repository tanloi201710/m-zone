import type { NextPage } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

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
  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={handleAddArtist}>Add new artist</button>
        <br className="mb-5" />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main>
        <button
          className="bg-[#18D860] text-white p-5"
          onClick={() => signIn()}>
          Login with Google
        </button>
      </main>
    </div>
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
