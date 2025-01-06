import Hero from "@/components/pageHero/hero";

export default function Home() {
  return (
    <div className="bg-white flex flex-col text-center text-black w-full">

      <div className="page w-full h-[100vh] flex items-center justify-center bg-[#141414]">
        <div className="h-screen text-white px-6 flex flex-col items-center justify-center gap-6 max-w-[16rem]">
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-500 tracking-[13px]">NEW PRODUCT</h3>
            <h1 className="text-[2.6rem] font-medium">XX99 MARK II HEADPHONES</h1>
          </div>
          <p className="text-gray-500">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className="h-12 w-40 font-medium text-white bg-[#D87D4A] hover:bg-[#FBAF85]">SEE PRODUCT</button>
        </div>
      </div>

      <Hero/>

    </div>
  );
}
