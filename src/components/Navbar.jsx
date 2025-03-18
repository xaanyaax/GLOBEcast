import { useState } from "react";
// import { Search } from "lucide-react";
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo and Name */}
      <div className="flex items-center gap-4 ">
        <img src="https://media-hosting.imagekit.io//c670033ba33b49bc/screenshot_1742037681167.png?Expires=1836645685&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RX0oiqWYGpTDQ1hHDJ9Vb6KnaVxNus3gimHaxJUuW1a8nd9nhOp4fwqto7cDKrYPAI~8Sx08IYEbRky8Z67p5pXv0hZU4xLLh9NcnSotpauS6fnmOflxbdeh8m6NP4-ZRAJL7FRfUWAtDkKPiYHx6xY~BYQjXW6Cyh6C-ur8vHwLVMAzfXQw7gdl-YU8~hcjQn54W3oPbiZ76eoC-uW3p0FDPhkmf94WtZa-tSvJt7b6HsLIOemhzS~K29cYoTICe-AcbypbeVEd7y~m3EAi4g~DwssiSXSeuFitxZ1fRGLk3lO38si2JjL0Q~eZpf7oHnhoJ8b83Xq7LOQvINBZcg__" alt="Logo" className="h-15 w-15" />
        <span className="text-2xl font-bold text-gray-700">GlobeCAST</span>
      </div>

      {/* Navigation Links */}
      
        <div className=" flex gap-17 text-lg ">
        <a href="" className="hover:text-gray-900">Home</a>
        {/* <a href="" className="hover:text-gray-900" onClick={this.handlePreviousClick}>&#8592; Previous</a>
        <a href="" className="hover:text-gray-900" onClick={this.handleNextClick}>Next &#8594;</a> */}
        </div>

      {/* Search Box
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 outline-none w-32 md:w-48"
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white p-2 hover:bg-blue-600">
          <Search size={20} />
        </button>
      </div> */}


      <div className="flex gap-3">
        <input type="text" className="px-3 py-2 outline-gray-800 border-8-amber-200 w-32 md:w-48"
          placeholder="Search here" />

        <button type="button" className="bg-blue-500 text-amber-50 w-18 cursor-pointer rounded text-lg">Search</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
