import React, { useContext, useState, useEffect  } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setcategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    
    if (category.length > 0) {
      // Assuming products have a 'category' field
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    
    setfilterProducts(productsCopy);
  }

  // Apply filter when category changes
  useEffect(() => {
    applyFilter();
  }, [category, products]) // products are also included to capture any updates from context

  useEffect(() => {
    if (products.length > 0) {
      setfilterProducts(products);
    }
  }, [products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon} />
        </p> 

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p> 
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'> 
            {['Lithium', 'Cylindrical-Lithium', 'Ni-mh', 'Others'].map((cat, index) => (
              <p className='flex gap-2' key={index}>
                <input className='w-3' type='checkbox' value={cat} onChange={toggleCategory} />
                {cat}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'All'} text2={'PRODUCTS'}/>
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              name={item.name} 
              price={item.price} 
              id={item._id} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
