import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const Search = () => {
  return (
    <div>
        <Header />

        <main className='flex'>
            <section>
                <p>
                    300 plus stays for 5 number of guests
                </p>
                <h1 className='text-3xl font-semibold my-2 mb-6'>Stays in Mars</h1>
                <div>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90'>Cancellation Flexibility</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90'>Type of Place</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90'>Price</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90'>Rooms and Bed</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90'>More Filters</p>
                </div>
            </section>
        </main>


        <Footer/>
    </div>
  )
}

export default Search