import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={handleAddArtist}>Add new artist</button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
