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
    <div className="flex border-2 py-2">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          style={SearchResultCardStyle}
          sizes="xl"
          fill
          alt="SearchResultCard"
          className="hover:scale-105 transform transition duration-300 ease-out "
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
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
