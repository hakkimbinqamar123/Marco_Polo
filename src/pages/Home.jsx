import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import TrendingProducts from '../components/TrendingProducts'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
      <div className="mt-5">
        <MainBanner />
        <Categories />
        <TrendingProducts/>
        <Testimonials/>
      </div>
    </>
  )
}

export default Home
