"use client";
import Hero from "@/components/pageHero/hero";
import Link from "next/link";
import { auth, googleProvider } from "@/services/firebase.js";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Home() {
    // const [authorize, setAuthorize] = useState();
    const handleLogout = async () => {
      await signOut(auth)
         .then(() => {
           console.log("signed out!!!");
         })
         .catch((error) => {
           console.error("error signing out", error);
         });
   };

    const handleGoogleSigup = async () => {
      // setAuthorizing(true);
      let result = null;
      try {
        // if(typeof window !== 'undefined') {
           result = await signInWithPopup(auth, googleProvider);
        // }
        console.log("result", result);

        const { user, credentials } = result;

        console.log({ user, credentials});
        // setUser(credentials.displayName);
        // console.log(users)
        console.log("Successfully loggedin!");
        Router.push('/');
      } catch (error) {
        console.log("error signing in", error);
      }
      // setAuthorizing(false);
    };

  return (
    <div className="bg-white flex flex-col text-center lg:text-start text-black w-full">
      <div className="page w-full h-[88vh] flex items-center lg:justify-start lg:px-28 justify-center lg:bg-[#131313] bg-[#141414]">
        <div className="h-[inherit] text-white px-6 lg:px-0 flex flex-col items-center lg:items-start justify-center gap-6 max-w-[16rem] lg:max-w-[23rem]">
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-500 tracking-[13px]">NEW PRODUCT</h3>
            <h1 className="text-[2.6rem] font-medium tracking-widest">
              XX99 MARK II HEADPHONES
            </h1>
          </div>
          <p className="text-gray-500">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/xx99-mark-II-headphones"
            className="h-12 w-40 flex flex-col items-center justify-center text-white bg-[#D87D4A] hover:bg-[#FBAF85] tracking-[1.5px]"
          >
            SEE PRODUCT
          </Link>
          <button className="bg-slate-700 text-white" onClick={handleGoogleSigup} >Google Signup</button>
          <button className="bg-slate-700 text-white" onClick={handleLogout} >Log Out</button>
        </div>
      </div>

      <Hero />
    </div>
  );
}
