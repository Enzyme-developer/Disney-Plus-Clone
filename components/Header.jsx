import React from 'react'
import Image from 'next/image'
import { HomeIcon , SearchIcon ,PlusIcon ,StarIcon } from '@heroicons/react/solid'
import logo from '../public/images/logo.svg'

const Header = () => {
  return (
    <div className='sticky bg-[#040714] top-0 z-[1000] h-[72px] flex items-center justify-between px-10 md:px-12 '>
          <Image
              src={logo} width={80} height={80}
              className='cursor-pointer'
          />

        <div className='ml-10 hidden md:flex items-center space-x-6'>

            <a className='header-link group'>
                <HomeIcon className='h-4' />
                <span className='span'>Home</span>
            </a>

            <a className='header-link group'>
                <SearchIcon className="h-4" />
                <span className="span">Search</span>
            </a>

            <a className='header-link group'>
                <PlusIcon className="h-4" />
                <span className="span">Watchlist</span>
            </a>

            <a className='header-link group'>
                <StarIcon className="h-4" />
                <span className="span">Originals</span>
            </a>

            <a className="header-link group">
                <img src="/images/movie-icon.svg" alt="" className="h-5" />
                <span className="span">Movies</span>
            </a>
              
            <a className="header-link group">
                <img src="/images/series-icon.svg" alt="" className="h-5" />
                <span className="span">Series</span>
            </a>
              
        </div>

        <button className='ml-auto uppercase border px-4 py-1.5 rounded tracking-wide hover:bg-white hover:text-black transition duration-200'>LOGIN</button> 

    </div>
  )
}

export default Header