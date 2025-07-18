import { faFigma, faXTwitter ,faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function Footer() {
  return (
    <>
    <div  className='bg-gray-950 p-4 text-white'>
      <div className='md:grid grid-cols-3'>
        <div className='flex justify-center flex-col'>
          <h1 className='text-xl'>ABOUT US</h1>
          <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat adipisci, molestiae accusamus, incidunt cumque dolor illo natus nesciunt animi eius odio minima repudiandae tempore provident nostrum quasi repellat harum!</p>
        </div>
        <div className=' md:flex flex-col items-center'>
          <h1 className='text-xl mt-5 md:mt-0'>NEWSLETTER</h1>
          <p className='md:ms-29 mt-4'>Stay updated wit our latest trends.</p>
          <div className='my-2 md:ms-28 flex '>
            <input type="text" placeholder='Email ID' className='placeholder-gray-400 bg-white w-full  p-2' />
            <button className='bg-amber-300 px-3'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>

        </div>
        <div className='md:flex  flex-col items-center'>
          <h1 className='text-xl mt-5 md:mt-0'>FOLLOW US</h1>
          <p className='mt-4'>Let us be social!</p>
          <div className='md:flex items-center mt-4 '>
            <FontAwesomeIcon className='md:ms-5 text-xl' icon={faFigma} />
            <FontAwesomeIcon className='ms-5 text-xl' icon={faXTwitter} />
            <FontAwesomeIcon className='ms-5 text-xl' icon={faFacebook} />
            <FontAwesomeIcon className='ms-5 text-xl' icon={faLinkedinIn} />
          </div>
        </div>

      </div>

    </div>
    <div className='bg-black'><p className='text-center text-sm p-3 text-white'>Copyright © 2023 All rights reserved | This website is made with by <FontAwesomeIcon icon={faHeart} style={{color: "#FFD43B",}}/> Dhanya Anuraj</p></div>
    
    </>
  )
}

export default Footer
