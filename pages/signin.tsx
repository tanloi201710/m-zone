import { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";

interface Props {
  providers: object[];
}

const SignIn: NextPage<Props> = (props) => {
  console.log(props.providers);
  return (
    <>
      {Object.values(props.providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
