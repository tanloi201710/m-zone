import { NextPage } from "next";
import { getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { GoCheck } from "react-icons/go";

interface Props {
  providers: object[];
}

const SignIn: NextPage<Props> = (props) => {
  console.log(props.providers);
  return (
    <>
      <div className="w-full h-screen bg-[#30363c]">
        <div className="h-1/6 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">Mzone</h2>
        </div>
        <div className="border-t-[#78828c21] border-t-[1px] h-3/4 p-8">
          <div className="flex items-center flex-col text-[#ffffffde]">
            {Object.values(props.providers).map((provider: any) => (
              <div
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="h-10 w-72 bg-[#ffffffde] rounded-md flex items-center justify-evenly cursor-pointer">
                <FcGoogle size={28} />
                <p className="font-bold text-slate-800">
                  Sign in with {provider.name}
                </p>
              </div>
            ))}
            <span className="text-sm py-5">OR</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="input"
            />
            <div className="mb-6">
              <label
                htmlFor="checkbox-one"
                className="flex items-center justify-center relative cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox-one"
                  id="checkbox-one"
                  className="appearance-none w-[18px] h-[18px] border-[2px] border-[#9e9e9e] focus:outline-none rounded-sm checked:bg-[#02b875] checked:text-white checked:border-[#02b875]"
                />
                <GoCheck
                  color="#fff"
                  size={16}
                  className="absolute top-[3px] left-[1px] opacity-0 check-one transition-all duration-200"
                />
                &ensp; Keep me signed in
              </label>
            </div>
            <button className="bg-[#17171b] px-12 py-3 text-xl rounded-md font-medium hover:bg-[#17171bae]">Sign in</button>
            <div className="my-4">
              <a href="#" className="font-semibold">Forgot password?</a>
            </div>
            <div>
              Do not have an account? &nbsp;
              <a href="signin" className="font-semibold text-[#02b875]">Sign up</a>
            </div>
          </div>
        </div>
      </div>
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
