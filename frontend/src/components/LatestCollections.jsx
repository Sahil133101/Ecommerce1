import React, {useContext} from 'react'
import { Shopcontext } from '../context/Shopcontext'

const LatestCollections = () => {
    const {products} = useContext(Shopcontext);
    console.log('products');
  return (
    <div>LatestCollections</div>
  )
}

export default LatestCollections