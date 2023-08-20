import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import CatagoriesSection from '../Components/CatagoriesSection'
import AllProductsPage from './AllProductsPage'
import SingleCategorySection from '../Components/SingleCategorySection'
import DealSection from '../Components/DealSection'
import CommentsSection from '../Components/CommentsSection'

export default function Home() {
  return (
    <>
      <div className="bg-light">
        <HeaderSection />
        {/* <CatagoriesSection/> */}

        {/* <AllProductsPage/> */}
        {/* <SingleCategorySection /> */}

        <DealSection/>
       
        {/* <CommentsSection/> */}
        
      </div>
    </>
  )
}
