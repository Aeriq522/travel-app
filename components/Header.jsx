import React, { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const ImageStyle = {
  objectFit: "contain",
  objectPosition: "left",
};

function Header( { placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetSearchInput = () => {
    setSearchInput('');
  }

  const search = () => router.push({
    pathname: '/search',
    query: {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests,
    }
  })

  const handleDateSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div onClick={() => router.push("/")} className="h-10 relative flex items-center cursor-pointer my-auto ">
        <Image src="https://links.papareact.com/qd3" fill style={ImageStyle} alt='logo' sizes="md"/>
      </div>
      {/* Middle - Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your Search..."}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right - User Info? */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-2 space-x-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleDateSelect}
          />
          <div className="flex items-center border-b-2 mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 "
            />
          </div>
          <div className="flex justify-evenly cursor-pointer">
            <button onClick={resetSearchInput} className="text-gray-500">Cancel</button>
            <button onClick={search} className="text-red-400">Submit</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


