import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const Search = () => {
  return (
    <div>
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p>
                    300 plus stays for 5 number of guests
                </p>
                <h1 className='text-3xl font-semibold my-2 mb-6'>Stays in Mars</h1>
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