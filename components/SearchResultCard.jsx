import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const SearchResultCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const SearchResultCardStyle = {
    objectFit: "cover",
  };

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg hover:scale-[101%] transform transition duration-300 ease-in-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 border">
        <div>
          <div className="bg-red-400 w-10 h-10 absolute top-20 left-2 hover:scale-[105%] transform transition duration-300 ease-in ">hi</div>
          <div className="bg-red-500 w-10 h-10 absolute top-20 right-2 hover:scale-[105%] transform transition duration-300 ease-in ">bye</div>
        </div>
        <Image
          src={img}
          style={SearchResultCardStyle}
          sizes="xl"
          fill
          alt="SearchResultCard"
          className="hover:scale-[102%] transform transition duration-300 ease-in-out z-10 hidden"
        /> 
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer hover:scale-110 transform transition duration-300 ease-out active:text-red-400 " />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
