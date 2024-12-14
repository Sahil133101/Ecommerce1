import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from './../components/NewsLetter';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <div>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-100 md:max-w-[380px]' src={assets.contact_icon} />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>
              Rajeev Nagar Sambhalkha Road<br/>Mithapur Ambala Cantt
            </p>
            <p className='text-gray-500'>
              Telephone: 89301214116 <br />
              Email: ambeySolutions@gmail.com
            </p>
          </div>
        </div>
        <NewsLetter />
      </div>
    </div>
  )
}

export default Contact
