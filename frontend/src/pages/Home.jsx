import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import OtherProducts from '../components/OtherProducts'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <hr />
      <OtherProducts />
      <hr/>
      <OurPolicy />
      <hr />
      <NewsLetter />
    </div>
  )
}

export default Home