import React from "react";
import { useState, useEffect } from "react";

const SearchComponent = ({ searchKeyword }) => {
  const [search, setSearch] = useState("");
  const searched = async (event) => {
    setSearch(event.target.value);
  };
  async function submitted() {
    await searchKeyword(search);
  }
  return (
    <div>
      <div className='relative'>
        <input
          onChange={searched}
          type='text'
          className='pr-10 bg-white border rounded-full py-2 px-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent'
          placeholder='Search...'
        />
        <button
          onClick={submitted}
          className='absolute top-0 right-0 mt-2 mr-2 transform transition-all duration-300 hover:w-10 hover:h-10 focus:w-10 focus:h-10'
        >
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            className='w-6 h-6'
          >
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
