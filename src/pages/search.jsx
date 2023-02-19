import Footer from 'components/Footer'
import Header from 'components/Header'
import { useRouter } from 'next/router'
import React from 'react'

const Search = () => {
    const router = useRouter();

    // ES6 Destructuring
    const { location, startDate, endDate, noOfGuests } = router.query;
    

    const unformatted_location = location.split(" ");

        for (let i = 0; i < unformatted_location.length; i++) {
            unformatted_location[i] =
            unformatted_location[i][0].toUpperCase() + unformatted_location[i].substr(1);
        }
        const locationProcessed = unformatted_location.join(" ");

    //console.log(location.charAt(0).toUpperCase() + location.slice(1))

  return (
    <div>
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p>
                    300 plus stays for {noOfGuests} number of guests
                </p>
                <h1 className='text-3xl font-semibold my-2 mb-6'>Stays in {locationProcessed} </h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Bed</p>
                    <p className='button'>More Filters</p>
                </div>
            </section>
        </main>


        <Footer/>
    </div>
  )
}

export default Search