import Footer from "components/Footer";
import Header from "components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import SearchResultCard from "components/SearchResultCard";
import Map from "components/Map";

const Search = ({ searchResults }) => {
  const [locationEntered, setLocationEntered] = useState("");
  const [range, setRange] = useState("");
  const router = useRouter();

  // console.log(searchResults);

  // ES6 Destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;

  useEffect(() => {
    const unformatted_location = location.split(" ");

    for (let i = 0; i < unformatted_location.length; i++) {
      unformatted_location[i] =
        unformatted_location[i][0].toUpperCase() +
        unformatted_location[i].substr(1);
    }
    setLocationEntered(unformatted_location.join(" "));
    const formattedStartDate = format(new Date(startDate), "MM/dd/yy");
    const formattedEndDate = format(new Date(endDate), "MM/dd/yy");
    setRange(`${formattedStartDate} - ${formattedEndDate}`);
  });

  return (
    <div>
      <Header
        placeholder={`${locationEntered} | ${range} | ${noOfGuests} Guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold my-2 mb-6">
            Stays in {locationEntered}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Bed</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <SearchResultCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}

////Context serverside props can return the serach query? Need to look into this so you can refresh the page
