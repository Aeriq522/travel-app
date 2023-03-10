import Image from "next/image";
import React from "react";

const BannerStyle = {
  objectFit: "cover",
};

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl-[600px] 2xl:h-[700px]">
      <Image src="https://links.papareact.com/0fm" fill style={BannerStyle} alt='banner' sizes="xl" priority='true'/>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Im flexible</button>
      </div>
    </div>
  );
}

export default Banner;
