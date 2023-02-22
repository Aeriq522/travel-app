import React from 'react'

const SearchResultCard = ( { img, location, title, description, star, price, total }) => {
  return (
    <div>
        <img src={img} />
    </div>
  )
}

export default SearchResultCard