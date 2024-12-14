import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-1 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[350px]' src={assets.logo} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>
          Welcome to AMBEY SOLUTIONS, a trusted leader in the manufacturing of high-quality lithium, nickel-metal hydride (Ni-MH), nickel-cadmium (Ni-Cd), and coin cell batteries. Since our inception in 2019, we have been committed to providing reliable, efficient, and sustainable energy solutions for a wide range of industries.
        </p>
        <p>
         <b>Why Choose Us?:- </b>
         <br></br>

<b> Quality & Precision: </b>
We adhere to the highest manufacturing standards, ensuring each battery is rigorously tested for performance, safety, and durability.
<br ></br>
<b> Innovation:</b> We are continuously researching and developing new technologies to meet the evolving needs of our clients and industries.
<br ></br>
<b> Sustainability:</b> As part of our commitment to the environment, we focus on producing energy-efficient products while striving to minimize the environmental impact of our manufacturing processes.
<br ></br>
<b> Customer-Centric Approach:</b> We value our customers and work closely with them to provide tailored solutions, reliable support, and timely delivery.
        </p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'OUR'} text2={'MISSION'} />

      </div>
      <div className='flex flex-col md:flex-row texr-sm mb-20'> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
     <p>
      
We are dedicated to producing high-quality, innovative, and environmentally conscious batteries that meet the growing demands of our customers, while maintaining a focus on reliability, customer satisfaction, and technological advancement.

Thank you for visiting Ambey Solutions. We look forward to being your trusted partner in energy solutions for years to come!
         </p>    
        </div>

      </div>
      <NewsLetter />
    </div> 
  )
}

export default About